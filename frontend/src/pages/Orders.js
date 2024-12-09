import React, { useEffect, useState } from 'react'; 
 
const Orders = () => { 
  const [orders, setOrders] = useState([]); 
 
  // Fetch orders from the backend 
  const fetchOrder = async () => { 
    try { 
      const res = await fetch(`http://localhost:8080/fetch-order`, { 
        method: "GET", 
        headers: { 
          "Content-Type": "application/json" 
        } 
      }); 
 
      const resData = await res.json(); 
      if (resData.status) { 
        setOrders(resData.data); 
      } 
    } catch (error) { 
      console.error("Failed to fetch orders:", error); 
    } 
  }; 
 
 
  // const add = async (a, b) => { 
  //   try { 
  //     const res = await fetch(`http://localhost:8080/add/${a}/${b}`, { 
  //       method: "POST", 
  //       headers: { 
  //         "Content-Type": "application/json", 
  //       }, 
  //     }); 
   
  //     const addData = await res.json(); 
   
  //     if (addData.data2 !== 0) { 
  //       console.log(addData.data2); 
  //     } 
  //   } catch (error) { 
  //     console.error("Failed to fetch addition result:", error); 
  //   } 
  // }; 
   
  // add(12,3) 
 
  useEffect(() => { 
    fetchOrder(); 
  }, []); 
 
  // Get unique addresses 
  const uniqueAddresses = [...new Set(orders.map(order => `${order.address}, ${order.city}, ${order.state}`))]; 
 
  return ( 
    <div className="container mx-auto py-8 px-4"> 
      <div className="flex flex-col justify-center items-center mt-12"> 
        <h1 className="text-2xl font-bold mb-4">Orders</h1> 
      </div> 
      {orders.length > 0 ? ( 
        <div className="flex flex-wrap justify-between gap-6 mt-8"> 
          {uniqueAddresses.map((addressString, index) => { 
            const ordersForAddress = orders.filter(order => `${order.address}, ${order.city}, ${order.state}` === addressString); 
 
            return ( 
              <div key={index} className="w-full lg:w-2/3 p-6 mb-4 shadow-xl rounded-lg"> 
                <h2 className="text-xl font-bold mb-2 text-white">Address {index + 1}</h2> 
                <p>{addressString}</p> 
                {ordersForAddress.map((order, orderIndex) => ( 
                  <div key={order._id} className="mt-4"> 
                    <h3 className="text-lg font-bold mb-2">Order #{orderIndex + 1}</h3> 
                    <div className="overflow-x-auto"> 
                      <table className="w-full mt-4"> 
                        <thead> 
                          <tr> 
                            <th className="text-left">Product</th> 
                            <th className="text-left">Price</th> 
                            <th className="text-left">Quantity</th> 
                            <th className="text-left">Total</th> 
                          </tr> 
                        </thead> 
                        <tbody> 
                          <tr> 
                            <td className="py-4"> 
                              <div className="flex items-center"> 
                                <img className="h-20 w-20 object-cover" src={order.image} alt={order.name} /> 
                                <span className="font-semibold ml-4">{order.name}</span> 
                              </div> 
                            </td> 
                            <td className="py-4">₹{parseFloat(order.price).toFixed(2)}</td> 
                            <td className="py-4">{order.qty}</td> 
                            <td className="py-4">₹{parseFloat(order.total).toFixed(2)}</td> 
                          </tr> 
                        </tbody> 
                      </table> 
                    </div> 
                    <div className="flex justify-between mt-4"> 
                      <span>Total Amount</span> 
                      <span className="font-semibold">₹{parseFloat(order.total).toFixed(2)}</span> 
                    </div> 
                  </div> 
                ))} 
              </div> 
            ); 
          })} 
        </div> 
      ) : ( 
        <p>No orders yet.</p> 
      )} 
    </div> 
  ); 
}; 
 
export default Orders;