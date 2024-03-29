// Header.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import CartTable from "../cart/Cart"; 

const Header = (props) => {
  const { cart,setCart } = props;
  
  const [cartVisible, setCartVisible] = useState(false);

  const handleCartClick = () => {
    setCartVisible(!cartVisible);
  };
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="list-container">
      <div className="list-header">
        <p>Trang Chủ</p> <p>Danh sách sản phẩm</p>
      </div>
      <div className="icon" onClick={handleCartClick}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <p className="cart-count">{totalCartItems}</p>
      </div>
      {cartVisible && <CartTable cart={cart} setCart={setCart} />}{" "}
    </div>
  );
};

export default Header;
