import React from 'react';
import { Link } from 'react-router-dom';
import CategoryDropdown from './CategoryDropdown'; // Import component mới
import styles from '../css/header.module.css';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      {/* Logo */}
      <Link to="/" className={styles.logo}>
        MyShop
      </Link>

      {/* Menu chính */}
      <nav>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link to="/">Trang chủ</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/about">Giới thiệu</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/contact">Liên hệ</Link>
          </li>

          {/* Category dropdown */}
          <li className={styles.menuItem}>
            <span>Danh mục</span>
            <CategoryDropdown /> {/* Sử dụng CategoryDropdown ở đây */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
