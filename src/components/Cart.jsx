import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../store/cartSlice';
import ConfirmPopup from './ConfirmPopup';
import { useState, useEffect } from 'react';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [showPopup, setShowPopup] = useState(false);

  // Scroll locking functionality
  useEffect(() => {
    if (showPopup) {
      // This prevents scrolling of the background content
      document.body.style.overflow = 'hidden';
    } else {
      // This restores scrolling when popup closes
      document.body.style.overflow = 'unset';
    }
  }, [showPopup]);

  return (
    <div className="relative">
      <div className="bg-white p-4 rounded-lg shadow-md w-full">
        <h2 className="text-[18px] font-[700] mb-4 text-red-400">
          Your Cart ({totalItems})
        </h2>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center gap-2 py-8">
            <img
              className="w-[50%]"
              src="/assets/images/illustration-empty-cart.svg"
              alt="Empty Cart"
            />
            <p className="text-gray-500 text-sm">
              Your added items will appear here
            </p>
          </div>
        ) : (
          <div>
            {cartItems.map(item => (
              <div key={item.name} className="pb-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1 ">
                    <h3 className="font-bold text-[13px] text-gray-500">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-9">
                      <div className="text-gray-500">
                        <span className="text-red-400 text-[14px] text-bold">
                          {item.quantity}x
                        </span>
                        <span className="text-gray-500 text-[14px] text-bold">
                          @ ${item.price.toFixed(2)}
                        </span>
                      </div>
                      <div className="font-medium text-gray-600 text-[14px] text-bold ">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(item.name))}
                    className="text-gray-400 hover:text-red-400 cursor-pointer text-xl font-light ml-2 rounded-full w-4 h-4 border border-gray-400 hover:border-red-400 "
                  >
                    <span className="relative bottom-2"> ×</span>
                  </button>
                </div>
              </div>
            ))}

            <div className="pt-2">
              <div className="flex justify-between font-bold text-lg py-3">
                <span className="text-[13px] text-gray-500">Order Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-center pt-6 pb-3">
                <img src="/assets/images/icon-carbon-neutral.svg" alt="" />
                <p className="text-xs text-gray-500">
                  This is a carbon-neutral delivery
                </p>
              </div>
              <button
                onClick={() => setShowPopup(true)}
                className="w-full bg-red-800 text-white py-3 rounded-[20px] text-sm font-medium cursor-pointer"
              >
                Confirm Order
              </button>
            </div>
          </div>
        )}
      </div>

      {/* popup logic */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center">
          <ConfirmPopup
            cartItems={cartItems}
            totalPrice={totalPrice}
            onClose={() => setShowPopup(false)}
          />
        </div>
      )}
    </div>
  );
}

export default Cart;
