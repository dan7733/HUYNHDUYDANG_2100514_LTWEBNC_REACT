import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Gọi API để lấy thông tin sản phẩm theo id
    axios.get(`http://localhost:3000/api/v1/deltaproduct/${id}`)
      .then(response => {
        if (response.data.errCode === 1) {
          setProduct(response.data.product);
        } else {
          setError(response.data.message);
        }
      })
      .catch(err => {
        setError("Có lỗi xảy ra khi tải sản phẩm");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Đang tải sản phẩm...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  return (
    <div>
      {product ? (
        <>
          <h2>{product.ten}</h2>
          <img src={`http://localhost:3000/images/product/${product.hinhanh}`} alt={product.ten} width="200" />
          <p>{product.mota}</p>
          <p>Giá: {product.gia} VND</p>
        </>
      ) : (
        <p>Không tìm thấy sản phẩm</p>
      )}
    </div>
  );
};

export default ProductDetail;
