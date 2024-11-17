import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../redux/actions/categoryActions'; // Import action
import { Link } from 'react-router-dom';
import styles from '../css/header.module.css';

const CategoryDropdown = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(fetchCategories()); // Dispatch action fetchCategories
  }, [dispatch]);

  // Nếu đang tải hoặc có lỗi
  if (loading) return <div>Đang tải dữ liệu...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div className={styles.categoryDropdown}>
      {categories.map((category, index) => (
        <Link
          key={index}
          to={`/productbycategory/${category.idnhom}`}
          className={styles.categoryListItem}
        >
          {category.ten}
        </Link>
      ))}
    </div>
  );
};

export default CategoryDropdown;
