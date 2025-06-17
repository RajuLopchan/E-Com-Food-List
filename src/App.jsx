// import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './store/cartSlice';
import Card from './components/Card';
import Cart from './components/Cart';
import data from './data';

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div className="flex flex-col lg:flex-row gap-5 justify-center pt-6 px-4">
      <div className="flex flex-col w-full lg:w-[50%]">
        <h1 className="text-2xl font-bold mb-4 pl-3">Desserts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
          {data.map((item, index) => (
            <Card
              key={index}
              image={item.image.desktop}
              category={item.category}
              name={item.name}
              price={item.price}
              addToCart={() => dispatch(addToCart(item))}
            />
          ))}
        </div>
      </div>
      <div className="w-full lg:w-[25%]">
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
