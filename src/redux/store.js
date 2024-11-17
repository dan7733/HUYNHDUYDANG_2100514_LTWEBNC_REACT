import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer';
import categoryReducer from './reducers/categoryReducer'; // Import categoryReducer
const store = configureStore({
  reducer: {
    products: productReducer, // Thêm productReducer vào state
    categories: categoryReducer, // Thêm categoryReducer vào state
  },
});
export default store;
