import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './hero.css'
import Womens from '../pages/Womens';
import { Link } from 'react-router-dom';
import Mens from '../pages/Mens';

export default function HeroSlider() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 12500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwd025a10d/images/homepage/All_Banners/BestSellers_D.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeM6lrCt-K7Jo47LP83mOCW4PBruBd_dJgOQ&s"/></SwiperSlide>
        <SwiperSlide><img src="https://gshock.casio.com/content/casio/locales/in/en/brands/gshock/contents/ambassador/rise-above-the-shocks/_jcr_content/root/responsivegrid/container_1689197747/teaser.casiocoreimg.jpeg/1715933325802/main-banner.jpeg"/></SwiperSlide>
        <SwiperSlide><img src="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/B9FF/production/_117751674_satan-shoes1.jpg.webp"/></SwiperSlide>
      </Swiper>

 
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="w-full h-full bg-black shadow-md rounded-lg overflow-hidden">
      <div class="md:flex h-full">
        <div class="md:w-1/2 p-6 flex flex-col justify-center">
        <h2 class="text-2xl font-bold mb-4 text-center p-7 ml-5 ">About US</h2>
        
        <span>
           <p class="px-4 py-2 bg-black text-white rounded">Welcome to Aurelia, your ultimate destination for luxury goods. We specialize in offering a curated collection of premium shoes, bags, watches, and accessories from the world’s most coveted designers. Our mission is to bring timeless elegance and exceptional quality directly to your doorstep. With a passion for sophistication, we ensure that every item in our store meets the highest standards of craftsmanship and style. Whether you're looking to elevate your wardrobe or find the perfect statement piece, Aurelia is here to provide an unmatched shopping experience. Discover luxury that speaks to your individual taste, and indulge in the art of fine living.</p>
           <p class="px-4 py-2 bg-black text-white rounded">At Aurelia, we believe that luxury is not just about products, but about the experience. Our online boutique offers an exclusive selection of designer shoes, handbags, watches, and accessories, each chosen for its impeccable quality and timeless appeal. We pride ourselves on offering personalized service, ensuring that your shopping journey is effortless and enjoyable. With fast, reliable shipping and exceptional customer support, we make it easy to indulge in the finest luxury, wherever you are. Explore our collection today and treat yourself to the elegance and prestige that only the best can offer.</p>
           </span>
        
        </div>
        <div class="md:w-1/2">
          <img class="object-cover w-full h-full " src="https://monochrome-watches.com/wp-content/uploads/2018/10/QR_Lzyog.jpeg" alt="Your Image"/>
        </div>
      </div>
    </div>
  </div>

<div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="w-full h-full bg-black shadow-md rounded-lg overflow-hidden">
      <div class="md:flex h-full">
        <div class="md:w-1/2">
          <img class="object-cover w-full h-full " src="https://media.istockphoto.com/id/890289344/photo/the-perfect-outfit-means-a-perfect-day.jpg?s=612x612&w=0&k=20&c=wNFc6otEA7CmR5vsWc4Sn7Pu4KqNd8VJtYlNV-fVs6w=" alt="Your Image"/>
        </div>
        <div class="md:w-1/2 p-6 flex flex-col justify-center">
       
          <h2 class="text-2xl font-bold mb-4 text-center p-7 ml-5">WATCHES</h2> 
          <Link to={"/Mens"} onClick={handleScrollToTop} >
          <span> <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:scale-150 duration-300 ml-72">DISCOVER</button></span>
        </Link>

         
        </div>
      </div>
    </div>
  </div>
{/* scroll to top using use effect */}


  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="w-full h-full bg-black shadow-md rounded-lg overflow-hidden">
      <div class="md:flex h-full">
        <div class="md:w-1/2 p-6 flex flex-col justify-center">
        <h2 class="text-2xl font-bold mb-4 text-center p-7 ml-5">BAGS</h2>
        <Link to={"/Womens" } onClick={handleScrollToTop}>
        <span> <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:scale-150 duration-300 ml-72">DISCOVER</button></span>
        </Link>
        </div>
        <div class="md:w-1/2">
          <img class="object-cover w-full h-full " src="https://media.istockphoto.com/id/1223379047/photo/fashion-portrait-of-elegant-woman-in-brown-sweater.jpg?s=612x612&w=0&k=20&c=wlBMrmnqdmWJ9wNECASE8hs0mf2P5vFBJfqvOswlMo8=" alt="Your Image"/>
        </div>
      </div>
    </div>
  </div>

  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="w-full h-full bg-black shadow-md rounded-lg overflow-hidden">
      <div class="md:flex h-full">
        <div class="md:w-1/2">
          <img class="object-cover w-full h-full " src="https://www.mensjournal.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTk3NTcyNzMyODY5NjgyODgy/marques-brownlee-atoms-251-6.png" alt="Your Image"/>
        </div>
        <div class="md:w-1/2 p-6 flex flex-col justify-center">
       
          <h2 class="text-2xl font-bold mb-4 text-center p-7 ml-5">Footwear</h2> 
          <Link to={"/Collections"} onClick={handleScrollToTop} >
          <span> <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:scale-150 duration-300 ml-72">DISCOVER</button></span>
        </Link>

         
        </div>
      </div>
    </div>
  </div>

  
    </>

  );

}