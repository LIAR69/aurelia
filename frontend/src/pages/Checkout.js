import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../store/basketSlice';
import { useNavigate } from 'react-router-dom';
import { addOrder, resetCheckout } from '../store/checkoutslice';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import endd from './endd';
import { Link } from 'react-router-dom';
export const stripePromise = loadStripe('pk_test_51PiwjL2NTrs4N280e4JTQx1kToDkZeVcbv1eluUGkxcrjWTmE6kh3yA0ZQ2bMZqTWXpwOvkxXVKXs1oLKN5NOGfl00i222Fdc9');

const Loading = () => (
  <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert fixed top-0 left-0 right-0 bottom-0 z-50">
    <span className="sr-only">Loading...</span>
    <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
    <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
    <div className="h-8 w-8 bg-black rounded-full animate-bounce"></div>
  </div>
);

const Checkout = () => {
  const basketData = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email:'',
    address: '',
    city: '',
    state: '',
    zipcode: '',

  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRemove = (id) => {
    dispatch(removeItem({ id }));
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Create Payment Intent on the server
      const { data: { clientSecret } } = await axios.post('http://localhost:8080/create-payment-intent', {
        amount: totalWithGST * 100,
      });

      // Confirm Payment on the client
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: `${formData.firstname} ${formData.lastname}`,
          },
        },
      });

      if (result.error) {
        setError(result.error.message);
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          // Save order details
          const orderData = {
            items: basketData.map((item) => ({
              ...item,
              paymentIntentId: result.paymentIntent.id,
              firstname: formData.firstname,
              lastname: formData.lastname,
              address: formData.address,
              city: formData.city,
              state: formData.state,
              zipcode: formData.zipcode,
            })),
          };

          const response = await fetch("http://localhost:8080/save-order", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(orderData),
          });
          const responseData = await response.json();
          console.log(responseData);
          alert("Payment successful!");
          navigate('/endd');
          window.scrollTo(0, 0);
        }
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const totalValue = basketData.reduce((total, item) => total + item.qty * item.price, 0);
  const totalWithGST = totalValue + 0.18 * totalValue;

  return (
    <div className="container mx-auto py-8 px-4">
      {loading && <Loading />} {/* to render loading animation */}
      <div className="flex flex-col justify-center items-center mt-12">
        <h1 className="text-4xl font-bold mb-4">Checkout Page</h1>
        <hr className="w-48 h-2 bg-red-400 mt-1 rounded-md" />
      </div>

      <form className="w-full max-w-lg mx-auto mt-8 bg-white p-8 shadow-md rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleOnChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleOnChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleOnChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleOnChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleOnChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Zip Code</label>
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleOnChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            pattern="[0-9]{6}"
            required
          />
        </div>
      </form>
      {basketData.length > 0 && (
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-6 mt-8">
          <div className="w-full lg:w-2/3 p-6 mb-4 shadow-xl rounded-lg">
            <h2 className="text-xl font-bold">Shopping List</h2>
            <table className="w-full mt-4">
              <thead>
                <tr>
                  <th className="text-left">Products</th>
                  <th className="text-left">Price</th>
                  <th className="text-left">Quantity</th>
                  <th className="text-left">Total</th>
                  <th className="text-left">Remove</th>
                </tr>
              </thead>
              <tbody>
                {basketData.map((item) => (
                  <tr key={item.id}>
                    <td className="py-4">
                      <div className="flex items-center">
                        <img className="h-20 w-20 object-cover" src={item.image} alt={item.name} />
                        <span className="font-semibold ml-4">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">₹{item.price.toFixed(2)}</td>
                    <td className="px-5 py-4">{item.qty}</td>
                    <td className="py-4">₹{(item.qty * item.price).toFixed(2)}</td>
                    <td className="py-4">
                      <button
                        className="border py-2 px-4 border-slate-500 rounded-lg hover:bg-red-500 hover:text-white"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-full lg:w-1/3 p-6 mb-4 h-60 shadow-xl rounded-lg">
            <div className="flex flex-col justify-center">
              <div className="flex justify-between mb-4">
                <span>Total Amount</span>
                <span className="font-semibold">₹{totalValue.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>GST</span>
                <span className="font-semibold text-red-400">18%</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Sub Total</span>
                <span className="font-semibold">₹{totalWithGST.toFixed(2)}</span>
              </div>
              <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
              Payment Details
            </h2>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border dark:border-gray-700">
              <CardElement options={{ hidePostalCode: true }} />
            </div>
            {error && <div className="mt-4 text-red-600">{error}</div>}
            <div className="mt-8 flex justify-end">
              <Link to = "/endd">
              <button
                onClick={handleCheckout}
                className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900"
              >
                Place Order
              </button>
              </Link>
            </div>
</div>
              {/* <button
                onClick={handleCheckout}
                className="mt-4 py-2 px-4 bg-red-500 hover:bg-red-700 text-white font-semibold rounded-lg focus:outline-none focus:shadow-outline"
              >
                Checkout
              </button> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;