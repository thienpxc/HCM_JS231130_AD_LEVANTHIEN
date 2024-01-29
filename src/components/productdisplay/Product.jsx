import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
const Product = (props) => {
    const  {list}  = props;
    const [cart, setCart] = useState([]);
    const handleAddToCart = (id) => {
      let product = list.find((item) => item.id === id);
      if (product) {
        const existingItemIndex = cart.findIndex(
          (cartItem) => cartItem.id === id
        );

        if (existingItemIndex !== -1) {
          const updatedCart = [...cart];
          updatedCart[existingItemIndex].quantity += 1;
          setCart(updatedCart);
        } else {
          let newCart = [...cart, { ...product, quantity: 1 }];
          setCart(newCart);
        }
      }
    };


    useEffect(() => {
       localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
  return (
    <>
      <Header setCart={setCart} cart={cart} />
      <div className="list-product">
        {list.map((product, index) => (
          <div className="product-item" key={index}>
            <img src={product.image} alt="product" className="product-image" />
            <h2>{product.product_name}</h2>
            <p>{parseFloat(product.price).toLocaleString()}đ</p>
            <button
              onClick={() => {
                handleAddToCart(product.id);
              }}
            >
              <FontAwesomeIcon icon={faShoppingCart} /> Thêm vào giỏ hàng
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Product;


