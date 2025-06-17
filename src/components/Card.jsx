import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../store/cartSlice';

function Card({ image, category, name, price }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const cartItem = cartItems.find(item => item.name === name);

  const handleAddToCart = () => {
    dispatch(addToCart({ image, category, name, price }));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(name));
  };

  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col w-full">
      <div>
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="pt-4 px-4 flex flex-col">
        <p className="text-[10px] md:text-[8px] lg:text-[10px] text-gray-500 line-clamp-1">
          {category}
        </p>
        <h3 className="text-[10px] md:text-[8px] lg:text-[10px] font-semibold">
          {name}
        </h3>
        <div className="flex justify-between items-center">
          <p className="text-orange-600 font-bold text-[10px] md:text-[8px] lg:text-[10px]">
            ${price.toFixed(2)}
          </p>
          <div className="flex">
            {cartItem ? (
              <div className="flex items-center gap-4 bg-orange-700 px-4 py-1.5 rounded-2xl relative bottom-15 right-7 ">
                <button
                  onClick={handleRemoveFromCart}
                  className="w-4 h-4 rounded-full border flex items-center justify-center text-white hover:bg-white hover:text-red-500 hover:cursor-pointer"
                >
                  <span className="relative bottom-0.5 ">-</span>
                </button>
                <span className="text-[9px] font-medium text-white">
                  {cartItem.quantity}
                </span>
                <button
                  onClick={handleAddToCart}
                  className="w-4 h-4 rounded-full flex items-center border justify-center text-white hover:bg-white hover:text-red-500 hover:cursor-pointer "
                >
                  <span className="relative bottom-0.5 ">+</span>
                </button>
              </div>
            ) : (
              // Original "Add to Cart" button (unchanged)
              <button
                onClick={handleAddToCart}
                className="bg-gray-100 px-2 py-1 rounded-2xl text-[0.7rem] md:text-[0.6rem] lg:text-[0.7rem] text-bold font-[600] cursor-pointer flex gap-1 items-center relative bottom-15 right-7 border-1 border-gray-300 hover:bg-gray-300"
              >
                <img
                  className="w-[15%]"
                  src="/assets/images/icon-add-to-cart.svg"
                  alt=""
                />
                <p className="text-black">Add to Cart</p>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
