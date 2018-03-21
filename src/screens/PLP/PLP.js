// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import './PLP.scss';
import Filter from '../../components/Filter/Filter';
import Item from '../../components/Item/Item';

class PLP extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        category: this.getFields(this.props.items, 'category'),
        color: this.getFields(this.props.items, 'color'),
      },
      openedField: '',
    }
  }

  getFields = (data, field) => {
    const fields = _.uniq(_.map(data, field));
    const res = fields.map(option => ({option, checked: true}));
    return res;
  }

  onClickField = (field) => {
    const openedField = this.state.openedField === field ? '' : field;
    this.setState({
      openedField,
    })
  }

  onChangeFilter = (field, ind) => {
    const filter = {...this.state.filter};
    filter[field][ind].checked = !filter[field][ind].checked;
    this.setState({
      filter,
    })
  }

  render() {
    return (
      <div className="PLP__container">
        <Filter
          fields={this.state.filter}
          openedField={this.state.openedField}
          onChange={this.onChangeFilter}
          onClickField={this.onClickField}
        />
        <div className="PLP__list">
          {this.props.items ? (
            this.props.items.map((item, ind) => {
              let check = true;
              const arrKeys = Object.keys(this.state.filter);
              for (let i = 0; i < arrKeys.length; i += 1) {
                const filterProp = _.find(this.state.filter[arrKeys[i]], {option: item[arrKeys[i]]});
                if (!filterProp.checked) {
                  check = false;
                  break;
                }
              }

              if (check) {
                return (
                  <Item
                    key={item.item_id}
                    item={item}
                  />
                );
              }
            })
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items.data,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {},
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(PLP);
