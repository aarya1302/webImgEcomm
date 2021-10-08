import { useSelector } from "react-redux";
import "../style/cart.css";
const Cart = () => {
  var cart = useSelector((state) => state.cart);
  var { cartItems, loading, cartError, cartLength } = cart;
  var cartUI = cartItems.map((item) => {
    return (
      <>
        <div className="mb-5 cart_item_div row text-center">
          <div className="col-3 ">
            <img src={item.main_picture} className="cart_item_image"></img>
          </div>
          <div className="col-5">
            <p>{item.item_name}</p>
            <p>{item._id}</p>
            <p>{item.description}</p>
          </div>
          <div className="col-3">
            <p>${item.price}</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
            </svg>
          </div>
        </div>
      </>
    );
  });

  return (
    <div className="padding-top-prevent-cut-off">
      <h1 className="text-center text-muted">Cart</h1>
      <div className="container ">{cartUI}</div>
    </div>
  );
};

export default Cart;
