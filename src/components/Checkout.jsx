import { useSelector } from 'react-redux';

const CheckOut = () => {
  const cartAmount = useSelector((store) => store.cart.cartTotalAmount);

  return (
    <div className='flex flex-col justify-between p-6 bg-slate-100 border  hover:shadow-md transition-all sm:mt-[72px] sm:ml-8'>
      <div>
        <h1 className='text-2xl text-black-800 font-bold'>Order Summary</h1>
        <h1 className='text-base mt-2 font-semibold'>
          Price - ₹{cartAmount / 100}
        </h1>
        <h1 className='text-base mt-2 font-semibold'>
          Delivery Charges - Free
        </h1>
        <h1 className='text-base mt-2 font-semibold'>
          Subtotal - ₹{cartAmount / 100}
        </h1>
      </div>
      <div>
        <button className='flex justify-center w-full p-2 uppercase rounded-lg bg-lime-500 mt-2 hover:bg-lime-600'>
          <span className='font-medium text-white p-1'>
            Proceed to Checkout
          </span>
        </button>
      </div>
    </div>
  );
};
export default CheckOut;
