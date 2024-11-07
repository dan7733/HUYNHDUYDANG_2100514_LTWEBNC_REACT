import { createBrowserRouter } from 'react-router-dom';
import App from '../App'; // Đảm bảo đường dẫn đúng tới App
import CategoryList from '../containers/header/header';
import ProductList from '../containers/product/product';
export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <ProductList/>
        },


        // {
        //     path: "sanpham/:iddm",
        //     element: <DSSanPhamNoiBat />
        //   },
        //   {
        //     path: "sanpham/chitiet/:idsp",
        //     element: <SanPham sanPham={null} />
        //   }
      ]
    }
  ]);
