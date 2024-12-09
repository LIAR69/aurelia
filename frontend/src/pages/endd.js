import React from 'react'
import Home from './Home';
import { Link } from 'react-router-dom';
import Orders from './Orders';

function Endd() {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling effect
        });
    };

    return (
        <div className="relative">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-grey-300">
                <h2 className="text-4xl font-bold">Payment Successful !!</h2>
                <p className="mt-2">Scroll Down to go to Orders</p>
            </div>
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
            <Link to="/Orders" onClick={handleScrollToTop}>
                    <button className="text-4xl font-bold">ORDERS</button>
                </Link>
                <p className="mt-2">Scroll Down to go to Home</p>
                
            </div>
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
                <Link to="/" onClick={handleScrollToTop}>
                    <button className="text-4xl font-bold">HOME</button>
                </Link>
            </div>
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
                <h2 className="text-4xl font-bold">Thank-You</h2>
            </div>
        </div>
    );
}

export default Endd;