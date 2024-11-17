import axios from 'axios';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

// Action to fetch products
export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });

    try {
      const response = await axios.get('http://localhost:3000/api/v1/product');
      if (response.data.errCode === 1) {
        dispatch({
          type: FETCH_PRODUCTS_SUCCESS,
          payload: response.data.products,
        });
      } else {
        dispatch({
          type: FETCH_PRODUCTS_FAILURE,
          payload: 'Có lỗi xảy ra khi lấy dữ liệu sản phẩm',
        });
      }
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCTS_FAILURE,
        payload: 'Không thể kết nối với API',
      });
    }
  };
};
