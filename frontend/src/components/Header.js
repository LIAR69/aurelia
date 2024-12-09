import React from "react";
import { SiAuchan } from "react-icons/si";
import { IoHomeSharp } from "react-icons/io5";
import { RiLoginBoxFill } from "react-icons/ri";
import { TiUserAdd } from "react-icons/ti";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Mens from "../pages/Mens";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../store/loginslice";
import checkout from "../pages/Checkout";
import Cart from "../pages/Cart";
// import { loginRedux } from '../store/loginSlice';
import ProductPage from "./productpage";
import HeroSlider from "./hero";
import Checkout from "../pages/Checkout";
import Collections from "../pages/collection";
import Endd from "../pages/endd";
function Header() {
  const userData = useSelector((state) => state.user1);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutRedux());
    alert("Logout Success");
  };
 
  const basketData = useSelector((state) => state.basket.basket);
  console.log(basketData);

  return (
    <>
      <div>
        <header className="w-full px-5 bg-black flex justify-between py-4">
          <div className=" text-white bg-black flex items-center text-3xl">
            <SiAuchan />
            <span className="text-4xl">urelia</span>
          </div>

          <div class="group relative cursor-pointer py-2">
            <div class="flex items-center justify-between space-x-5 bg-black px-4">
              <a
                class="menu-hover my-2 py-2 font-bold text-2xl text-white lg:mx-4"
                onClick=""   >
                Categories
              </a>
            </div>

            <div class="invisible absolute z-50 flex w-full flex-col bg-black py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
              <Link to="/Mens">
                <span class="my-2 block border-b border-gray-100 py-1 font-semibold text-white hover:text-gray-600 md:mx-2">
                  Watches
                </span>
              </Link>
              <Link to="/Womens">
                <span
                  href="/Womens"
                  class="my-2 block border-b border-gray-100 py-1 font-semibold text-white hover:text-gray-600 md:mx-2"
                >
                  Bags
                </span>
              </Link>
              <Link to="/Collections">
              <span class="my-2 block border-b border-gray-100 py-1 font-semibold text-white hover:text-gray-600 md:mx-2">
                Footwear
              </span>
              </Link>
            </div>
          </div>

          <div class="group relative cursor-pointer py-2">
            <div class="flex items-center justify-between space-x-5 bg-black px-4">
              <a
                class="menu-hover my-2 py-2 font-bold text-2xl text-white lg:mx-4"
                onClick=""
              >
                Your Orders
              </a>
            </div>

            <div class="invisible absolute z-50 flex w-full flex-col bg-black py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
              {/* <Link to="/Orders">
                <span class="my-2 block border-b border-gray-100 py-1 font-semibold text-white hover:text-gray-600 md:mx-2">
                Orders
                </span>
              </Link> */}
              <Link to ="/Cart">
                <span
                  class="my-2 block border-b border-gray-100 py-1 font-semibold text-white hover:text-gray-600 md:mx-2"
                >
                  Your Cart
                </span>
                </Link>
              <Link to="/Checkout">
              <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-white hover:text-gray-600 md:mx-2">
                Check-Out
              </a>
              </Link>
            </div>
          </div>

          <div className="flex gap-5 px-5">
            <li className="list-none text-2xl flex items-center gap-10"> </li>
            <Link to={"/Hero"}>
              <div className="text-3xl text-white hover:scale-150 duration-300">
                <IoHomeSharp />
              </div>
            </Link>

            {userData.email ? (
              <>
                <Link to={"/cart"}>
                  <div className=" text-white relative flex justify-center items-center hover:scale-150 duration-300">
                    <div className="text-3xl">
                      <FaShoppingCart />
                    </div>
                    <div className="absolute bg-white h-5 w-5 top-[-10px] right-[-10px] flex justify-center items-center rounded-full">
                      <span className="text-black text-sm font-semibold">
                        {basketData.length}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className=" cursor-pointer" onClick={handleLogout}>
                  <button className="bg-[#2a2a2a] dark:bg-slate-800 mx-2 text-white p-2 rounded-md cursor-pointer hover:bg-black">
                    LogOut
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to={"/login"}>
                  <div className="text-3xl text-white hover:scale-150 duration-300">
                    <RiLoginBoxFill />
                  </div>
                </Link>
                <Link to={"/signup"}>
                  <div className="text-3xl text-white hover:scale-150 duration-300">
                    <TiUserAdd />
                  </div>
                </Link>
              </>
            )}
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
