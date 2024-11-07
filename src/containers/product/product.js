import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]); // Đổi tên state thành "products"
  const [loading, setLoading] = useState(true); // Trạng thái loading
  const [error, setError] = useState(null); // Trạng thái lỗi

  useEffect(() => {
    // Gọi API bằng axios để lấy danh sách sản phẩm
    axios.get('http://localhost:3000/api/v1/product')
      .then(response => {
        console.log(response.data); // Debug: kiểm tra dữ liệu trả về
        if (response.data.errCode === 1) {
          setProducts(response.data.products); // Cập nhật dữ liệu sản phẩm vào state
        } else {
          setError('Có lỗi xảy ra khi lấy dữ liệu sản phẩm');
        }
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setError('Không thể kết nối với API');
      })
      .finally(() => {
        setLoading(false); // Kết thúc trạng thái loading
      });
  }, []);

  // Nếu đang tải, hiển thị thông báo loading
  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  // Nếu có lỗi, hiển thị thông báo lỗi
  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <h3>{product.ten}</h3> {/* Hiển thị tên sản phẩm */}
            <p>Giá: {product.gia} VND</p>
            <Link to={`/product/${product.id}`}>Chi tiết sản phẩm</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductList;
