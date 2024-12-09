import logo from './logo.svg';
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './pages/Card'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Mens from './pages/Mens';
import Womens from './pages/Womens';
import ProductPage from './components/productpage';
import HeroSlider from "./components/hero";
import templ from './components/templ';
import Checkout from './pages/Checkout';
import checkoutslice from './store/checkoutslice';
import Collections from './pages/collection';
import Orders from './pages/Orders';
import Endd from './pages/endd';
import { stripePromise } from './pages/Checkout';
import { Elements } from '@stripe/react-stripe-js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return(
<>
    
    <Router>
    <Header/>
      <Routes>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/mens' element={<Mens/>}/>
        <Route path='/womens' element={<Womens/>}/>
        <Route path='/productpage' element={<ProductPage/>}/>
        <Route path='/hero' element={<HeroSlider/>}/>
        <Route path='/templ' element={<templ/>}/>
        <Route path='/collections' element={<Collections/>}/>
        <Route path='/endd' element={<Endd/>}/>
        <Route path='/checkout' element={
          <Elements stripe={stripePromise}>
          <Checkout/>
          </Elements>
          }/>


      </Routes>
      <ToastContainer />
      <Footer/>
    </Router>
    </>
  );
}

export default App;
