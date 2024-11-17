import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/productActions'; // Import action của bạn
import { Link } from 'react-router-dom';
import styles from '../css/product.module.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts()); // Dispatch action fetchProducts
  }, [dispatch]);

  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  return (
    <div className={styles.productListContainer}>
      <h2 className={styles.productTitle}>Danh sách sản phẩm</h2>
      <ul className={styles.productList}>
        {products.map((product, index) => (
          <li key={index} className={styles.productItem}>
            <h3>{product.ten}</h3>
            <p>Giá: {product.gia} VND</p>
            <Link to={`/deltaproduct/${product.masp}`} className={styles.productLink}>
              Chi tiết sản phẩm
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
