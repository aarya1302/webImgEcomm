import { useSelector } from "react-redux";

const Cart = () => {
  var cart = useSelector((state) => state.cart);
  return (
    <div className="padding-top-prevent-cut-off">
      <h1>Cart</h1>
    </div>
  );
};

export default Cart;
