
import React, { useRef, useState,useEffect } from 'react';
import Link from 'next/link';
import { IMAGE_URL } from '@/pages/api/api_config';
import { Virtual, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import { BASE_URL } from '@/pages/api/api_config';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



export default function SpotlightCard() {

  const [swiperRef, setSwiperRef] = useState(null);

 const [slides, setSlides] = useState([]);
 useEffect(() => {
   axios.get(`${BASE_URL}/news`)
     .then((res) => {
       setSlides(res.data);
     })
     .catch((error) => {
       console.error('Error fetching data:', error);
     });
 }, []);

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination,Autoplay]}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        loop={true} 
        autoplay={{ delay: 2000 }} 
           
      >
        {slides.map((post, index) => (
          <SwiperSlide key={post.title} virtualIndex={index}>
           
           <Link href={`/Urdu/News/${encodeURIComponent(post.title)}/${post.id}`} >
          <div className="post-23 flex gap-4 items-center md:max-w-[100%] md:h-[150px]" >
         <img
           className="md:max-w-[50%] md:max-h-[40] max-h-[8rem] max-w-[90%]"
           alt="Image"
           src={`${IMAGE_URL}/${post.images}`}
           width={180}
           height={127}
         />
         <div className=" w-[60%] mt-6 text-black">
           {" "}
           <p className="craig-bator-dec-12">
             <span className="text-wrapper-44">&nbsp;</span>
             <span className="text-wrapper-45">{post.created_at}</span>
           </p>
           <p className="text-wrapper-70 mt-1 font-bold">{post.title}</p>
         </div>               

        </div>
        </Link>
          </SwiperSlide>
        ))}
      </Swiper>

    </>
  );
}
