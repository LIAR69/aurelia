// const express = require("express")

// const app = express()

// const PORT = 8080

// app.get("/", (req,res)=>{
//     return res.send('My server')
// })

// app.listen(PORT, (req,res)=>{
//     return console.log("Server is running on port:"+ PORT)
// })

require('dotenv').config()

const express = require("express")
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const cors = require("cors");
const app = express()
app.use(express.json())
const PORT = process.env.PORT
app.use(cors({origin: true}))
const stripe = require('stripe')('sk_test_51PiwjL2NTrs4N280sdwapwEczoG7K9ufAaUPmwLTZl2crDIf1SXTAoSzs8bU3Heg1b3b1p5wxuRG9cRlMRbcUGZ800dv8hNYMl'); // Your Stripe secret key
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
app.use(cookieParser());




//mongodb connection
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL)
        .then(()=> console.log("Connected to the database!!"))
        .catch((error)=> console.error("Error while connecting to the dataBase", error))



//schema

const orderSchema = mongoose.Schema({
    address:String,
    city: String,
    state: String,
    zipcode:String,
    image:String,
    name:String,
    price:String,
    qty:String,
    total:String,
    date:{
        type:Date,
        default:Date.now,
    }
},)

const orderModel = mongoose.model("orders", orderSchema)


const userSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String
},{
    timestamps: true
})

const userModel = mongoose.model("user", userSchema);

// signup api

app.post("/sign-up", async(req, res, next)=>{
    try {
        const {name, email, password} = req.body;
        const existingUser = await userModel.findOne({email: req.body.email})
        if(existingUser){
            return res.json({
                message: "user exists !! ",
                status: false
            })
        }else{
            const salt = await bcrypt.genSalt(10)
            const hashPass = await bcrypt.hash(req.body.password, salt)
            const newUser = new userModel({
                name: req.body.name,
                email: req.body.email,
                password: hashPass
            })
            await newUser.save();
            return res.json({
                message: "user registered success",
                status: true,
                
            })
        }
    } catch (error) {
        return res.send("errror while registering the user", error)
    }
} )


// Create Payment Intent
app.post('/create-payment-intent', async (req, res) => {
    const { amount } = req.body;

    // const calculateOrderAmount = (items) => {
    //     return items.reduce((total, item) => total + item.total*100, 0);
    // };

    const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount),
        currency: 'inr',
    });

    res.send({ clientSecret: paymentIntent.client_secret });
});


app.get("/", (req,res)=>{
    return res.send('My server')
})

app.listen(PORT, ()=>{
    return console.log("Server is running on port:"+  PORT)
})

// fetch orders api
app.get("/fetch-order", async(req,res)=>{
    try{
        const alldata = await orderModel.find({})
        return res.json({
            message:"All orders",
            status:true,
            data:alldata
        })
    }catch (error) {
      return res.send("error in orders",error);
}
})

//login api
app.post("/login", async(req,res,next)=>{
    try{
        const {email, password} = req.body;
        const existingUser = await userModel.findOne({email: req.body.email})
        if(existingUser){
            const IsPassCorrect = await bcrypt.compare(password,existingUser.password)
        if(IsPassCorrect){
            return res.json({
                message: "LOGIN SUCCESS",
                status: true,
                data: existingUser
            })
        }  
        else{
            return res.json({
                message: "Email Password Is Incorrect",
                status:false,
            })
        }  
        }
        else{
            return res.json({
                mesaage:"User Not Found!!",
                status:false,
            })
        }
    }


    catch (error) {
        return res.send("errror while registering the user", error)
    }
})

app.post("/save-order", async (req, res) => {
    try {
      const { items } = req.body;
      // Save each item in the order
      for (const item of items) {
        const order = new orderModel(item);
        await order.save();
      }
      return res.json({
        message: "Order saved successfully",
        status: true,
      });
    } catch (error) {
      return res.send("error in orders", error);
   }
  });

  