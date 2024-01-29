import React from "react";
import "./cart.css";

const CartTable = (props) => {
  const { cart, setCart } = props;

  const decreaseQuantity = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity--;
      setCart(newCart);
    }
  };

  const increaseQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].quantity++;
    setCart(newCart);
  };

  const removeFromCart = (itemId) => {
    const newCart = cart.filter((item) => item.id !== itemId);
    setCart(newCart);
  };
 
const calculateTotal = () => {
  return cart.reduce((total, item) => {
    const price = parseFloat(item.price.replace(/[đ,]/g, ""));
    const itemTotal = isNaN(price) ? 0 : price * item.quantity;
    return total + itemTotal;
  }, 0);
};



  return (
    <div className="cart-container">
      <h3>Giỏ hàng</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="Cart">
          {cart.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <img
                    src={item.image}
                    alt="product"
                    className="product-image"
                  />
                </td>
                <td>{item.product_name}</td>
                <td>{parseFloat(item.price).toLocaleString()}đ</td>
                <td>
                  <button onClick={() => decreaseQuantity(index)}>-</button>
                  {item.quantity}
                  <button onClick={() => increaseQuantity(index)}>+</button>
                </td>
                <td>
                  <button onClick={() => removeFromCart(item.id)}>Xóa</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="monny">Tổng tiền: {calculateTotal()} đ</p>
    </div>
  );
};

export default CartTable;
