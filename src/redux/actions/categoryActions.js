import axios from 'axios';

export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CATEGORIES_REQUEST });

    try {
      const response = await axios.get('http://localhost:3000/api/v1/category');
      if (response.data.errCode === 1) {
        dispatch({
          type: FETCH_CATEGORIES_SUCCESS,
          payload: response.data.categorys,
        });
      } else {
        dispatch({
          type: FETCH_CATEGORIES_FAILURE,
          payload: 'Có lỗi xảy ra khi lấy dữ liệu',
        });
      }
    } catch (error) {
      dispatch({
        type: FETCH_CATEGORIES_FAILURE,
        payload: 'Không thể kết nối với API',
      });
    }
  };
};
