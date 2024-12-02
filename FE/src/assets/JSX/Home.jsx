import React from "react";
import { Helmet } from "react-helmet"; // Thêm React Helmet để quản lý thẻ head
import "../CSS/Home.css";

const Header = () => (
  <header className="header">
    <h1>Cinema</h1>
    <button id="Dangky">Đăng ký</button>
    <button id="Dangnhap">Đăng nhập</button>
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">Phim chiếu theo rạp</li>
        <li className="nav-item">Phim</li>
        <li className="nav-item">Rạp</li>
        <li className="nav-item">Thành viên</li>
        <li className="nav-item">Tin Mới & Ưu Đãi</li>
        <li className="nav-item">Giá Vé</li>
      </ul>
    </nav>
  </header>
);

const NavBody = () => (
  <div className="nav1">
    <ul className="nav-list1">
      <li className="nav-item1">Phim Sắp Chiếu</li>
      <li className="nav-item1">Phim Đang Chiếu</li>
      <li className="nav-item1">Suất Đặc Biệt</li>
    </ul>
  </div>
);

const ProductItem = ({ imgSrc, name, category, genre, duration }) => (
  <li>
    <div className="product-item">
      <div className="product-top">
        <a href="#">
          <img src={imgSrc} alt={name} />
        </a>
      </div>
      <div className="product-info">
        <a href="#" className="buy-now">
          Mua Ngay
        </a>
        <a href="#" className="product-cat">
          {name}
        </a>
        <a href="#" className="product-theloai">
          Thể Loại: {genre}
        </a>
        <a href="#" className="product-thoiluong">
          Thời Lượng: {duration}
        </a>
      </div>
    </div>
  </li>
);

const Footer = () => (
  <footer className="Footer">
    <ul className="Footer1">
      <h1>Điều Khoản Sử Dụng</h1>
      <li className="item">Điều Khoản Chung</li>
      <li className="item">Điều Khoản Giao Dịch</li>
      <li className="item">Chính Sách Thanh Toán</li>
      <li className="item">Chính Sách Bảo Mật</li>
      <li className="item">Câu Hỏi Thường Gặp</li>
    </ul>
    <ul className="Footer2">
      <h1>Kết nối với chúng tôi</h1>
      <li className="item">
        <i className="fa-brands fa-facebook"></i>
      </li>
      <li className="item">
        <i className="fa-brands fa-youtube"></i>
      </li>
      <li className="item">
        <i className="fa-brands fa-instagram"></i>
      </li>
      <li className="item">
        <i className="fa-brands fa-line"></i>
      </li>
      <li className="item">
        <i className="fa-brands fa-zalo"></i>
      </li>
    </ul>
    <ul className="Footer3">
      <h1>Chăm Sóc Khách Hàng</h1>
      <li className="item">Hotline: 1900 8989</li>
      <li className="item">Email hỗ trợ: hoidap@cinema.vn</li>
    </ul>
  </footer>
);

const Home = () => {
  const products = Array(8).fill({
    imgSrc: "/FE/public/image3.jpg",
    name: "Mortal Kombat",
    category: "Hành Động",
    genre: "Hành Động, Máu me",
    duration: "120p",
  });

  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta charset="utf-8" />
      </Helmet>
      <Header />
      <main>
        <NavBody />
        <div className="background">
          <div id="wrapper">
            <ul className="products">
              {products.map((product, index) => (
                <ProductItem key={index} {...product} />
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
