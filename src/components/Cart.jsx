import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartItems from "./CartItems";
import CheckOut from "./Checkout";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((store) => store.cart.cartTotalQuantity);
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="my-2 mt-[7rem] items-center mx-4 flex justify-center flex-1 flex-wrap sm:flex-nowrap">
      <div className="w-full sm:w-[50%]">
        <div className="my-4 flex justify-center items-center">
          <div className="text-center font-bold text-xl">
            Cart Items - {totalQuantity}
            
          </div>
          {Object.keys(cartItems).length > 0 && (
            <button
              className="bg-lime-500 p-2 ml-2 text-white rounded-md"
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </button>
          )}
        </div>
        {Object.keys(cartItems).length > 0 && (
          <div data-testid="cart-items" className="flex flex-col">
            {Object.values(cartItems).map((item) => (
              <CartItems key={item.id} {...item} />
            ))}
          </div>
        )}
      </div>
      <CheckOut />
    </div>
  );
};

export default Cart;
