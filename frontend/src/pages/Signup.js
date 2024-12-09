import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { registerRedux } from '../store/userSlice'
import {useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
function Signup() {



    const[data,setData] = useState({
        id:"",
        name:"",
        email: "",
        password:""


    })
    
    const handleonchange = (element)=>{ 
        const {name,value} = element.target

        setData((previousstate)=>{
            return {
                ...previousstate,
                [name]:value
            }
        })
    }
    console.log(data)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const handlesubmit =(e)=>{
    //     e.preventDefault()
    //     const {name , email , password } = data
    //     if(name && email && password ){
    //                 const userData = {
    //                     ...data,
    //                     id: (new Date).getTime()
    //                 }
    //                 console.log(userData.id)
    //                 dispatch(registerRedux(userData))
            
    //                 navigate("/login")
                    
    //             } else {
    //                 alert("Please fill the required fields")
    //             }

    const handleSubmit= async(e)=>{
        e.preventDefault()
    
        const{name,email,password}=data
    
        if( name && email && password){
          const response = await fetch("http://localhost:8080/sign-up",{
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
            navigate("/login")
          }else{
            toast.warning(responseData.message)
          }
      
        
        }
        else{
          toast.warning("please fill all the fields!!!")
    }
    
    }

       
    


  return (

        <div class=" bg-black p-36">
    <h1 class="text-white mb-8 font-extrabold text-4xl">Register</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

        <form onSubmit={handleSubmit}>
            <div>
                <label class=" text-white block font-semibold" for="name">Name</label>
                <input onChange={handleonchange} value={data.name} class="text-black shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full" id="name" type="text" name="name" autofocus="autofocus"/>
            </div>

            <div class="mt-4">
                <label class="text-white block font-semibold" for="email">Email</label>
                <input onChange={handleonchange} value={data.email} class="text-black shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full" id="email" type="email" name="email" />
            </div>

            <div class="mt-4">
                <label class="text-white block font-semibold" for="password">Password</label>
                <input onChange={handleonchange} value={data.password} class="text-black shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full" id="password" type="password" name="password"  autocomplete="new-password"/>
            </div>

            <div class="flex items-center justify-between mt-8">
                <button onClick={handleSubmit}  type="submit" class="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">Register</button>
                <a href = "/login" class="text-white font-semibold">
                    Already registered?
                </a>
            </div>
        </form>

        <aside class="">
            <div class="bg-black 0 p-8 rounded">
                <h2 class="text-white font-bold text-2xl">Instructions</h2>
                <ul class="text-white list-disc mt-4 list-inside">
                    <li>All users must provide a valid email address and password to create an account.</li>
                    <li>Password should be at least 12 characters long.</li>
                    <li>Password should be a combination of uppercase letters, lowercase letters, numbers, and symbols..</li>
                </ul>
            </div>
        </aside>

    </div>
</div>
  )
}

export default Signup