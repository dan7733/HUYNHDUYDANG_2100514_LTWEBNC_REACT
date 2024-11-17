import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
  } from '../actions/productActions';
  
  const initialState = {
    products: [], // Khởi tạo products là mảng rỗng
    loading: true,
    error: null,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          loading: false,
          products: action.payload || [], // Đảm bảo products là mảng
        };
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default productReducer;
  