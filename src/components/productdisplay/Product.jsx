import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Header from '../header/Header';

const Product = (props) => {
    const  {list}  = props;
    const [cart, setCart] = useState([]);
    const handleAddToCart = (id) => {
        let product = list.find((item) => item.id === id);
        if(product){
            
            let newCart = [...cart,product]
            setCart(newCart);
        }

    }

    useEffect(() => {
       localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
  return (
    <>
      <Header setCart={setCart}  cart={cart}/>
      <div className="list-product">
        {list.map((product, index) => (
          <div className="product-item" key={index}>
            <img src={product.image} alt="product" className="product-image" />
            <h2>{product.product_name}</h2>
            <p>{product.price}</p>
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
    </>
  );
};

export default Product;


