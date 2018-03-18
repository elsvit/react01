// @flow
import get from 'lodash/get';

const GET_PRODUCTS: 'products/GET_PRODUCTS' = 'products/GET_PRODUCTS';
const GET_PRODUCTS_SUCCESS: 'products/GET_PRODUCTS_SUCCESS' =
  'products/GET_PRODUCTS_SUCCESS';
const GET_PRODUCTS_FAILED: 'products/GET_PRODUCTS_FAILED' =
  'products/GET_PRODUCTS_FAILED';

const { PRODUCTS } = require('../../assets/fake/products');

export type Product = {
  product_id: number,
  price: number,
  name: string,
}

type GetProductsAction = {|
  type: typeof GET_PRODUCTS,
|};

type GetproductsuccessAction = {|
  type: typeof GET_PRODUCTS_SUCCESS,
  result: {
    data: Array<*>,
  },
|};

type GetproductsFailedAction = {|
  type: typeof GET_PRODUCTS_FAILED,
  error: {
    response: {
      data: {
        message: string,
      },
    },
  },
|};

type productsActions =
  | GetProductsAction
  | GetproductsuccessAction
  | GetproductsFailedAction;

type productState = {
  data: Array<Product>,
  loading: boolean,
  error: ?string,
};

type InitialState = productState;

const initialState: InitialState = {
  data: [...PRODUCTS.products],
  loading: false,
  error: null,
};

export default function productsReducer(state: InitialState = initialState,
                                     action: productsActions,): InitialState {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        data: [...state.products.data],
        error: null,
        loading: true,
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: action.result.data,
        error: null,
        loading: false,
      };

    case GET_PRODUCTS_FAILED:
      return {
        ...state,
        data: [...state.products.data],
        loading: false,
        error: get(action.error, 'response.data.message', String(action.error)),
      };

    default:
      return state;
  }
}

// export function loadProducts(): {
//     return {
//         type: API_REQUEST,
//         types: [GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILED],
//         call: () => api().products.get(),
//     };
// }
