import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Lottie from 'lottie-react'
import cart from '../img/emptycart.json'
import { decreaseItem , increaseItem , removeItem } from '../store/basketSlice'
import Checkout from './Checkout'
import { Link } from 'react-router-dom'
function Cart() {
  
const basketData = useSelector((state)=> state.basket.basket)
  console.log(basketData)
  const dispatch = useDispatch();
    const handleIncrease = (id)=>{
    dispatch(increaseItem({id}))
  }
  const handleDecrease = (id)=>{
    dispatch(decreaseItem({id}))
  }
  const handleRemove=(id)=>{
    dispatch(removeItem({id}))
  }

  const baskettotalvalue = basketData.reduce((total ,item) => {
    return total + (item.qty *item.price)

  }, 0)
console.log(baskettotalvalue)
return (
  <div className='container mx-auto py-8 px-4'>
   <div className='flex flex-col justify-center items-center mt-12'>
    <h1 className='text-2xl font-bold'>Shopping Cart</h1>
    <h1 className='text-xl font-semibold'>Total Items - ({basketData.length})</h1>
   </div>
   <div>
   {basketData.length > 0 ? (
    <div className='p-6 mb-4 shadow-xl rounded-lg '>
      <table className='w-full m-4 '>
        <thead>
          <tr>
            <th className='text-left '>Products</th>
            <th className='text-left '>Price</th>
            <th className='text-left '>Qunatity</th>
            <th className='text-left '>Total</th>
            <th className='text-left '>Remove</th>
          </tr>
        </thead>
        <tbody>
          {basketData.map((item)=> (
            <tr key={item.id}>
              <td className='py-4'>
                <div className='flex items-center '>
                  <img className=' h-20 w-20 object-cover' src={item.image}/>
                  <span className='font-semibold ml-4'>{item.name}</span>
                </div>
              </td>
              <td className='py-4'>{item.price}</td>
              <td className='py-4'>
                <div>
                  <button onClick={()=> handleDecrease(item.id)} className='border py-2 px-4  border-slate-500 rounded-lg'>-</button>
                  <span className='m-2'>{item.qty}</span>
                  <button onClick={()=> handleIncrease(item.id)} className='border py-2 px-4  border-slate-500 rounded-lg '>+</button>
                </div>
              </td>
              <td className='py-4'>{item.total}</td>
              <td className='py-4'>
                <button className='border py-2 px-4  border-slate-500 rounded-lg' onClick={()=> handleRemove(item.id)}>Remove</button>
              </td>
            </tr>
            ))}
           
          <>
          <Link to="/checkout"> 
          <button  class="flex bg-blue-500 hover:bg-blue-700 text-white font-bold mt-8 py-2 px-4 rounded ">Checkout</button>
          </Link>
          </>
         
            
           
      
            {/* <div><Checkout/></div> */}
            {/* <div class="flex">
    <div class="bg-black rounded-lg shadow-lg p-6 border-2 mt-4 wgi">
        <h1 class="text-white text-2xl font-bold mb-6">SUMMARY</h1>
        <div class="flex justify-between mb-4">
            <div class="flex items-center">
                <img src="https://via.placeholder.com/80" alt="Product Image" class="mr-4"/>
                <div>
                    <h2 class="text-white font-bold">Product Name</h2>
                   
                </div>
            </div>
            <div class="flex items-center">
                <button class="text-red-500 hover:text-red-700"><i class="fas fa-trash"></i></button>
                <div class="mx-4">
                    
                </div>
                <span class="text-white font-bold">Rs. 19000</span>
            </div>
        </div>
        <hr class="my-4"/>
        <div class="flex text-white justify-between items-center">
            <span class="font-bold">Subtotal:</span>
            <span class="font-bold">Rs. 19000</span>
        </div>
        <div class="flex text-white justify-between items-center mt-4">
            <span>Taxes:</span>
            <span>Rs. 1900</span>
        </div>
        <hr class="my-4"/>
        <div class="flex justify-between text-white items-center">
            <span class="font-bold">Total:</span>
            <span class="font-bold">Rs. 20900</span>
        </div>
        <div class="flex justify-center mt-6">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Checkout</button>
        </div>
    </div>
</div> */}
          </tbody>
        </table>
      </div>

      
       ) : (
        <div className='flex justify-center items-center'>
          <Lottie className='w-[300px]' animationData={cart}/>
        </div>
       )}
     </div>
    </div>

  )

}




export default Cart
