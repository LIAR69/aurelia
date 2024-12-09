import React from 'react';
import { useSelector } from 'react-redux';

const Orders = () => {
  const orders = useSelector((state) => state.checkout.orders);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col justify-center items-center mt-12">
        <h1 className="text-2xl font-bold mb-4">Orders</h1>
      </div>
      {orders.length > 0 ? (
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-6 mt-8">
          {orders.map((order, index) => (
            <div key={index} className="w-full lg:w-2/3 p-6 mb-4 shadow-xl rounded-lg">
              <h2 className="text-xl font-bold">Order #{index + 1}</h2>
              <p>Address: {order.address}</p>
              <p>City: {order.city}</p>
              <p>State: {order.state}</p>
              <p>Zip Code: {order.zipcode}</p>
              <h3 className="text-lg font-bold mt-4">Items:</h3>
              <table className="w-full mt-4">
                <thead>
                  <tr>
                    <th className="text-left">Products</th>
                    <th className="text-left">Price</th>
                    <th className="text-left">Quantity</th>
                    <th className="text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.map((item, itemIndex) => (
                    <tr key={itemIndex}>
                      <td className="py-4">
                        <div className="flex items-center">
                          <img className="h-20 w-20 object-cover" src={item.image} alt={item.name} />
                          <span className="font-semibold ml-4">{item.name}</span>
                        </div>
                      </td>
                      <td className="py-4">₹{item.price.toFixed(2)}</td>
                      <td className="py-4">{item.qty}</td>
                      <td className="py-4">₹{(item.qty * item.price).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between mt-4">
                <span>Total Amount</span>
                <span className="font-semibold">₹{order.totalValue.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>GST</span>
                <span className="font-semibold text-red-400">18%</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Subtotal</span>
                <span className="font-semibold">₹{order.totalWithGST.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No orders yet.</p>
      )}
    </div>
  );
};

export default Orders;