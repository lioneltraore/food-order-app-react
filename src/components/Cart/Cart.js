import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = <ul className={classes['cart-items']}>{
    [{ id: 1, name: "sushi", amount: 2, price: 12.4 }].map(
        (item) => <li key={item.id}>{item.name}</li>
      )}</ul>


  return (
    <Modal>
      { cartItems }
      <div className={classes.total}>
        <span>Total amount</span>
        <span>35.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
