import React from 'react';

function ConfirmPopup({ cartItems, totalPrice, onClose }) {
  //  onClose prop
  return (
    <div className="fixed inset-0 flex items-center justify-center p-5">
      <div className="bg-white rounded-md w-[400px] p-5">
        <div className="">
          <div>
            <img
              className="w-[27px]"
              src="./assets/images/icon-order-confirmed.svg"
              alt="error image"
            />
            <h2 className="text-xl font-bold text-gray-800 pt-3">
              Order Confirmed
            </h2>
          </div>
        </div>
        <p className="text-gray-500 mb-5 text-[10px]">
          We hope you enjoy your food!
        </p>

        <div className="bg-rose-50">
          {cartItems.map(item => (
            <div
              key={item.name}
              className="flex justify-between items-center p-3 rounded-[4%]"
            >
              <div className="flex items-center gap-3">
                <img
                  src=""
                  alt=""
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <div>
                  <p className="font-bold text-[10px] text-gray-700">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {item.quantity}x @ ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <span className="font-bold text-[12px] text-gray-600">
                ${(item.quantity * item.price).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-between font-semibold text-gray-500 text-[12px] pt-4 pr-4 pl-3">
          <span>Order Total</span>
          <span className="text-gray-800 text-bold font-[700]">
            ${totalPrice.toFixed(2)}
          </span>
        </div>

        {/* Added onClick handler to close popup and start new order */}
        <button
          onClick={onClose}
          className="w-full mt-6 bg-orange-700 text-white py-2 rounded-[25px] text-[10px] font-[400] hover:bg-orange-800 transition"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default ConfirmPopup;
