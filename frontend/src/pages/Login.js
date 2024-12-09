import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginRedux } from '../store/loginslice'
import { toast } from 'react-toastify'

function Login() {
    const userData = useSelector((state)=> state.user)
    console.log(userData)

    const[data,setData] = useState({
        email: "",
        password:""
    })
    const handleonchange = (e)=>{ 
        const {name,value} = e.target
        setData((previousstate)=>{
            return {
                ...previousstate,
                [name]:value
            }
        })
    }

    const  dispatch = useDispatch();
    const navigate = useNavigate()
    // console.log(data)

    const handleSubmit= async(e)=>{
        e.preventDefault()
    
        const{email,password}=data
    
        if( email && password){
          const response = await fetch("http://localhost:8080/login",{
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body : JSON.stringify(data)
          })
    
          const responseData = await response.json();
          console.log(responseData)
          if(responseData.status){
            toast.success(responseData.message)
            dispatch(loginRedux(responseData.data))
            navigate("/")
          }else{
        toast.warning(responseData.message);
          }
      
        
        }
        else{
          toast.warning("please fill all the fields!!!")
    }
    
    }

//     const handleSubmit=(e)=>{
//         e.preventDefault();

//     const {email , password} = data
//     if (email && password){
//         if(userData.email === email && userData.password === password)   {
//         dispatch(loginRedux(userData))
//         alert("Login Success")
//         navigate("/")
//     } else{
//         alert("Wrong credentials")
//     } 
// }else {
//         alert("Fill all the fields")
//     }
// }
  return (
    
    
<div class="bg-black flex h-screen items-center justify-center p-4  ">
    <div class="w-full max-w-md border-2 border-white rounded-xl">
        <div class="bg-black shadow-md rounded-md p-8">

            <img class="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/384672/account-avatar-profile-user-7.svg" alt="" />

            <h2 class="text-white mt-6 text-center text-3xl font-bold tracking-tight">
                Log in to your account
            </h2>


            <form onSubmit={handleSubmit} class="space-y-6 mt-4" action="#" >
                <div>
                    <label for="password" class="block text-sm font-medium text-white">Email</label>
                    <div class="mt-1">
                        <input onChange = {handleonchange} name="email" type="email-address" autocomplete="email-address" 
                            class="text-black px-2 py-3 mt-1 block w-full rounded-md border border-white shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                    </div>
                </div>

                <div>
                    <label for="password" class="text-white block text-sm font-mediumtext-white">Password</label>
                    <div class="mt-1">
                        <input onChange = {handleonchange}  id="password" name="password" type="password" autocomplete="password" 
                            class=" text-black px-2 py-3 mt-1 block w-full rounded-md border border-white shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                    </div>
                </div>

                <div>
                    <button onSubmit = {handleSubmit} type="submit" 
                        class="flex w-full justify-center rounded-md border border-white bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">Sign
                        In
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default Login