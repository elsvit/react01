// @flow
import { combineReducers } from 'redux';

import items from './items';
import products from './products';

export default combineReducers({
  items,
  products,
});