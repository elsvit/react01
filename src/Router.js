// @flow
import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import Loadable from 'react-loadable';

import Loading from './components/Loading';
import Wrapper from './screens/Wrapper/Wrapper';

const PLP = Loadable({
    loader: () => import('./screens/PLP/PLP'),
    loading: Loading,
});

const Profile = Loadable({
    loader: () => import('./screens/Profile/Profile'),
    loading: Loading,
});

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Wrapper>
                    <Switch>
                        <Route path="/plp" component={PLP}/>
                        <Route path="/profile" component={Profile}/>
                        <Redirect to="/plp"/>
                    </Switch>
                </Wrapper>
            </BrowserRouter>
        );
    }
}

export default Router;