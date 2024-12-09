import React from 'react'
import Products from '../components/Products'
function Collections() {
  return (
  
    <div  className=' bg-black flex flex-wrap gap-8 justify-center p-6'>
      <p className='text-2xl font-bold'>FOOTWEAR</p>
      <p className='text-xl '>
      Step into elegance with our curated collection of luxury shoes, where superior craftsmanship meets timeless design. From sleek heels to stylish sneakers, each pair is crafted to offer unmatched comfort and sophistication for every occasion.</p>
 <Products   
      id={101}
      image={ "https://media.darveys.com/catalog/product/6/2/62-lot6253_1.jpg"}
      name={"Karl Lagerfeld Black Pointed Toe Boots"}
      code = {"Product Code: CL34J6_NLP1_NLC"}
      price={70000}
/>      
<Products   
      id={102}
      image={ "https://media.darveys.com/catalog/product/s/h/shoe_240724_16511_1.jpg"}
      name={"Valentino Garavani Black Beatle Leather Boots"}
      code = {"Product Code: CL4H32_NLP1_KBC"}
      price={90000}
/>      
<Products   
      id={103}
      image={ "https://static.nike.com/a/images/w_1280,q_auto,f_auto/e900f437-53f3-4ed1-a583-b8560fea17af/air-force-1-low-x-kobe-varsity-maize-and-varsity-purple-fz1151-100-release-date.jpg"}
      name={"Air Force 1 Low x Kobe"}
      code = {"Product Code: CL121586_NLP1_NLC"}
      price={35000}
/>      
<Products   
      id={104}
      image={ "https://www.escaro.in/cdn/shop/files/1712191576570187-5_thump.jpg?v=1720620867&width=800"}
      name={"The Vienna Toecap Oxfords In Black"}
      code = {"Product Code: CL21586_LMS9_NLC"}
      price={10000}
/>      
<Products   
      id={105}
      image={ "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/83498b62-6a3d-4db5-95d0-6d168d5df6f2/GIANNIS+FREAK+6+NRG+EP.png"}
      name={"Giannis Freak 6 EP"}
      code = {"Product Code: CLF4586_NLP1_NLC"}
      price={35000}
/>      
<Products   
      id={106}
      image={ "https://media.balmain.com/image/upload/f_auto,q_auto,dpr_auto/w_1680/sfcc/balmain/hi-res/DM1VJ309KWBNGNVF?_i=AG"}
      name={"Unicorn Low trainers in neoprene and calfskin"}
      code = {"Product Code: CL11586_NLP1_PLC"}
      price={50000}
/>      
<Products   
      id={107}
      image={ "https://www.escaro.in/cdn/shop/files/3007221659166086-5_thump.jpg?v=1720060512&width=800"}
      name={"Rowan Cap Toe Oxford"}
      code = {"Product Code: CL3586_D321_NLC"}
      price={10000}
/>      
<Products   
      id={108}
      image={ "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/47fa7cc0-ef2b-4431-b8b4-d44fdab39e72/AIR+MAX+PLUS+DRIFT.png"}
      name={"Nike Air Max Plus Drift"}
      code = {"Product Code: CL37593_NLP1_NLC"}
      price={25000}
/>      
<Products   
      id={1038}
      image={ "https://media.balmain.com/image/upload/f_auto,q_auto,dpr_auto/w_1680/sfcc/balmain/hi-res/EM1VI288LCLPEABF?_i=AG"}
      name={"B-Court printed calfskin trainers"}
      code = {"Product Code: CL37593_NLP1_NLC"}
      price={75000}
/>      
<Products   
      id={1068}
      image={ "https://assets.armani.com/image/upload/f_auto,q_100/X4B149_XN882_M814_F_FW2024.jpg"}
      name={"PEBBLED LEATHER DRIVING LOAFERS WITH STIRRUP BAR"}
      code = {"Product Code: CL37593_NLP1_NLC"}
      price={12000}
/>      
    </div>
  )
}


  
export default Collections