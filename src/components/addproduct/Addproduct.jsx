import React, { useState } from "react";
import Product from "../productdisplay/Product";
const Addproduct = (props) => {
    const { list } = props;
    console.log(list);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(cart);
  };

  return (
    <div>
      <h1>Ứng dụng cửa hàng điện thoại</h1>
      <Product list={list} addToCart={addToCart} />
      {/* Hiển thị thông tin giỏ hàng */}
      <div>
        <h2>Giỏ hàng</h2>
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              {product.product_name} - {product.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Addproduct;
