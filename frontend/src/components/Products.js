import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCartRedux } from '../store/basketSlice';
import { toast } from 'react-toastify';

const Products = ({id,image, name,code ,  price}) =>  {
  

  const dispatch = useDispatch()
  const handleAddToCart = ()=>{
  dispatch(addToCartRedux({
    id,
    image,
    name,
    price
  }));
  toast.success(`${name} added to the cart`)
  // alert(name +"is added to the cart")
  }
  return (
    <div>
        <div className="flex flex-col gap-2 w-80 border-2 border-white bg-white rounded-xl">
            <img className='w-80 h-80 object-cover rounded-t-xl' src={image}></img>
            <div >
                <div>
                    <p className='bg-white text-xl font-bold truncate px-3 text-black'>{name}</p>
                    <p className='bg-white text-sm font-semi-bold text-center truncate text-black'>{code}</p>
                </div>
                <div className="bg-white text-center font-bold flex gap-4 py-2 justify-between text-black">
       <p>Rs. {price}</p>
        </div>
            </div>
            <button className='bg-white text-black py-2 w-full rounded-md hover:bg-blue-400  ' onClick={handleAddToCart} >Add to Cart</button>
        </div>
    </div>
    
  )
}

export default Products