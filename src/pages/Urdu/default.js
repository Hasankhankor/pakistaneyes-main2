import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import DontMiss from "@/components/Home/DontMiss";
import Sports from "@/components/Home/Sports";
import LifeStyle from "@/components/Home/Lifestyle";
import Gallery from "@/components/Home/gallery";
import axios from "axios";
import Spotlight from "@/components/Home/SpotLight/Spotlight";
import Video from "@/components/Home/Video/video";
import { BASE_URL,IMAGE_URL,site_url} from "../api/api_config";
import { useEffect } from "react";


const Slider1 = "/assets/SliderGallery1.png"
const Slider2 = "/assets/SliderGallery2.png"
const Slider3 = "/assets/SliderGallery3.png"
function Default() {
  const images = [Slider1, Slider2, Slider3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [posts, setPosts] = useState([]);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };
  useEffect(() => {
   axios.get(`${BASE_URL}/news`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

  }, []);

  const randomNumber = Math.floor(Math.random() * (10 - 3 + 1)) + 3;
  return (
    <>


      <div className="my-8 container mx-auto md:block hidden">
        <Spotlight />
      </div>

      <div className="flex flex-col md:flex-row my-8 md:container md:mx-auto index w-fit mx-4">
      {posts.length > 0 && (
        <div className="photo-gallery relative">
          <div className="flex flex-col md:flex-row relative">
            <p className="bg-red-500 md:left-[53%] absolute z-20 px-2 text-white m-3  bottor-[28rem]" >
             {
             posts[5].categoryID
             }
            </p>
            <div className="absolute bottom-[20rem] md:max-w-[45%] left-[36%] md:bottom-[2rem]  md:left-[53%] z-20 text-white md:w-auto ">
              <p className="mb-2 mx-2">{
              posts[5].created_at
              }</p>
              <h2 className="font-bold ">
                {
                 posts[5].title
                }
              </h2>
            </div>
            <img
              className="image-15 w-full h-72 md:w-96"

              alt="Image"

              src={`${IMAGE_URL}/${posts[5].images}`}
            />


            <p className="bg-yellow-500 absolute top-[25rem]  md:top-auto md:left-[0%] z-20 px-2 text-white m-3">
            {
             posts[2].categoryID
            }
            </p>
            <div className="absolute md:max-w-[45%] md:left-[0%] bottom-[2rem] mx-5 z-20 text-white max-w-1/2">
              <p className="mb-2 mx-2">{
              posts[2].created_at
              }</p>
              <h2 className="font-bold ">
              {
               posts[2].title
              }
              </h2>
            </div>

            <img
              className="image-15 w-full h-72 md:w-96"
              alt="Image"
              src={`${IMAGE_URL}/${posts[2].images}`}
            />
          </div>
          <div className="flex relative">
            <p className="bg-pink-500 absolute z-20 px-2 text-white m-3">{
            posts[3].categoryID
            }</p>
            <div className="absolute md:max-w-[70%]  bottom-[2rem] mx-5 z-20 text-white md:w-auto md:w-4/12">
              <p className="mb-2 mx-2">{
               posts[3].created_at
              }</p>
              <h2 className="font-bold text-2xl">
              {
              posts[2].title
              }
              </h2>
            </div>
            <img
              className="image-15 h-64 w-full"
              alt="Image"
              src={`${IMAGE_URL}/${posts[2].images}`}
            />
          </div>
        </div>
        )}
        <div className="relative w-full md:w-1/2">
          <p className="bg-red-500 absolute z-20 px-2 text-white top-4 left-2">
          تازہ ترین خبریں          </p>
          <div className="absolute top-4 md:left-40 md:bottom-4 z-20 text-white md:inset-y-3/4">



          <div className="container mx-auto px-4">
      {posts.slice(0, 2).map((post, index) => (
        <div key={post.id} className="my-4">

          <h2 className="text-2xl font-bold my-2">{post.title}</h2>
          <br>
          </br>
          <p className="text-gray-500">{post.body}</p>
        </div>
      ))}
    </div>





              <p className="text-black text-xl font-bold">
                </p>

          </div>
          <AiOutlineLeft
            onClick={handlePrevSlide}
            className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-white-400 z-20"
          />

          <div className=" min-h-[100%] h-72 overflow-hidden relative md:max-h-[100%]">

            <Swipe
              onSwipeLeft={handleNextSlide}
              onSwipeRight={handlePrevSlide}
              className="relative z-10 w-full h-full"

            >


             {posts.slice(-6).map((post, index) => (



                <img
                  key={index}
                 src={`${IMAGE_URL}/${post.images}`}

                  layout="fill"
                  objectFit="cover"
                  className={
                    index === currentSlide ? "animate-fadeIn w-full md:min-h-full " : "hidden"
                  }
                />
              ))}
            </Swipe>

          </div>
          <AiOutlineRight
            onClick={handleNextSlide}

            className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
          />
        </div>

      </div>
      {/* // new section start here */}
      {posts.length > 0 && (
      <div className="grid grid-cols-1 gap-8 md:flex mx-4 md:mx-24 items-center justify-around">
        <div className="g-white shadow p-5  px-4 md:w-96">

          <Link className={`component-post-wrapper`} href="/" />
          <div className={`bollywood-wrapper`}>
            <div className="bollywood mb-3">

              <div className="overlap-group-3">

                 <img
              className="image-15 w-full h-72 md:w-96"
              alt="Image"
              src={`${IMAGE_URL}/${posts[3].images}`}
            />

                <div className="text-wrapper-59 w-fit"> {posts[3].categoryID}</div>
              </div>
            </div>
          </div>





          <p className="ext-black text-xl">{posts[0].created_at}</p>

          <p className="text-black text-xl font-bold">
            {posts[0].title}
          </p>
        </div>
        <div className="bg-white shadow p-5  px-4 md:w-96">
          <Link className={`component-post-wrapper`} href="/" />
          <div className={`bollywood-wrapper`}>
            <div className="bollywood mb-3">


              <div className="overlap-group-3">
              <img
              className="image-15 w-full h-72 md:w-96"
              alt="Image"
              src={`${IMAGE_URL}/${posts[1].images}`}
            />
                 <div className="text-wrapper-59 w-fit"> {posts[1 ].categoryID}</div>
              </div>
            </div>
          </div>

          <p className="text-black text-xl"> {
           posts[1].created_at
          }</p>

          <p className="text-black text-xl font-bold">
          {
           posts[1].title
          }
          </p>
        </div>
        <div className="g-white shadow  p-5 px-4 md:w-96 mb-6">
          <Link className={`component-post-wrapper`} href="/" />
          <div className={`bollywood-wrapper`}>
            <div className="bollywood mb-3">
              <div className="overlap-group-3">
              <img
              className="image-15 w-full h-72 md:w-96"
              alt="Image"
              src={`${IMAGE_URL}/${posts[2].images}`}
            />
                <div className="text-wrapper-59 w-fit"> {
                 posts[2].categoryID
                }</div>
              </div>
            </div>
          </div>
          <p className="ext-black text-xl"> {
           posts[2].created_at
          }</p>
          <p className="text-black text-xl font-bold">
          {
           posts[2].title
          }
          </p>
        </div>
      </div>
      )}
      <DontMiss />
      <Sports />
      <LifeStyle />
      <Video />
      <Gallery />
    </>
  );
}

export default Default;
