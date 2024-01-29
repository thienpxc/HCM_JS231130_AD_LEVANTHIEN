import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Thông tin liên hệ</h3>
          <p>Địa chỉ: 123 Đường ABC, Quận XYZ, Thành phố ABC</p>
          <p>Số điện thoại: 0123 456 789</p>
          <p>Email: info@example.com</p>
        </div>
        <div className="footer-section">
          <h3>Chính sách</h3>
          <ul>
            <li>Chính sách bảo mật</li>
            <li>Chính sách vận chuyển</li>
            <li>Chính sách đổi trả hàng</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Theo dõi chúng tôi</h3>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Bản quyền thuộc về Cửa hàng điện thoại di động</p>
      </div>
    </footer>
  );
};

export default Footer;
