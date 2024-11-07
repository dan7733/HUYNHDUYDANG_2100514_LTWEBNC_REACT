import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); // Trạng thái loading
  const [error, setError] = useState(null); // Trạng thái lỗi

  useEffect(() => {
    // Gọi API bằng axios
    axios.get('http://localhost:3000/api/v1/category')
      .then(response => {
        console.log(response.data); // Debug: kiểm tra dữ liệu trả về
        if (response.data.errCode === 1) {
          setCategories(response.data.categorys); // Cập nhật dữ liệu vào state
        } else {
          setError('Có lỗi xảy ra khi lấy dữ liệu');
        }
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
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
      <h2>Danh sách loại sản phẩm</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category.ten}</li> // Hiển thị tên loại sản phẩm
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
