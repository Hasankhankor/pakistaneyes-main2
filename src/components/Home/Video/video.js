import Link from "next/link";
import Image from "next/image";
import VideoItem from "./VideoItem/VideoItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/pages/api/api_config";
import VideoPlayer from "./ModalVideo";
import ModalVideo from "./ModalVideo";

const CategoryImg1 = "/blog/blog3.jpg";
const VideoIcon = "/assets/PlayvideoButton.png";

const Video = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/categories`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.error("categories not fetched!", error);
      });
    axios
      .get(`${BASE_URL}/news`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <div className="container mx-auto index">
        <nav className="text-white container mx-auto flex gap-20 justify-around md:justify-start">
          <div className="text-red-400 text-wrapper-48 flex items-center">
            {categories.length > 0 && categories[4].name}
          </div>
          <ul className="flex flex-col sm:flex-row gap-2 sm:gap-16 pt-3 font-bold items-center ">
            {/* <div className="flex gap-16"> */}
            <li className="hover:border-b-4 hover:ease-in border-b-4 bg-red-500  hidden md:block">
              <Link className="text-wrapper-37 px-3" href="/Urdu/News/blogs">
                تمام
              </Link>
            </li>
            {categories.map((category) => (
              <li className="hover:ease-in bg-red-500 px-3 hidden md:block">
                <Link
                  className="text-wrapper-37"
                  href={`/Urdu/Categories/${category.name}`}
                >
                  {category.name}
                </Link>
              </li>
            ))}
            {/* </div> */}
            <div className="button flex gap-2">
              <div className="right-button" />
              <div className="frame-7 bg-red-300">
                <div className="overlap-group-10 flex">
                  <div className="rectangle"></div>
                  <Image
                    className="frame-7 "
                    width={50}
                    height={50}
                    alt="Frame"
                    src="https://cdn.animaapp.com/projects/650436ea563939b650df9455/releases/650437a496d31c08b0a413c5/img/frame-10.svg"
                  />
                </div>
              </div>
            </div>
          </ul>
        </nav>
        <hr class="bg-red-400 mb-4 p-0 md:w-[79%]" style={{ height: "3px" }} />
        <div className="my-6 ">
          <div className="video-2 hidden md:block">
            {posts.slice(-1).map((post, index) => (
              <div
                className="overlap-38"
                key={index}
                style={{
                  backgroundImage:
                    'url("https://cdn.animaapp.com/projects/650436ea563939b650df9455/releases/650437a496d31c08b0a413c5/img/video.png")',
                }}
              >
                <div className="">
                  <Image
                    className="video-icon"
                    alt="Polygon"
                    src={VideoIcon}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="pt-56 px-12">
                  <span className="text-wrapper-82 text-2xl">
                    {post.created_at}
                  </span>
                  <p className="play-this-game-for">{post.title}</p>
                </div>
                <div className="esport">
                  <div className="overlap-group-25">
                    <div className="text-wrapper-83">{post.categoryID}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="container mx-auto my-8">
            <VideoItem />
          </div>
        </div>
      </div>
    </>
  );
};
export default Video;
