import { BASE_URL, IMAGE_URL } from "@/pages/api/api_config";
import VideoCard from "./VideoCard";

const thumbnails = [
  "/assets/VideoImage1.png",
  "/assets/VideoImage2.png",
  "/assets/VideoImage3.png",
];
import axios from "axios";
import { useState, useEffect } from "react";

const VideoItem = () => {
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


        // console.log("posts: ",posts[3].url);
  return (
    <div className="md:grid grid-cols-3 gap-2 md:gap-10 container mx-4  w-fit md:w-fit">
      {posts.slice(-6).map((post, index) => (
        <VideoCard
          key={index}
          thumbnail={`${IMAGE_URL}/${post.images}`}
          date={post.created_at}
          video = {post.newsvideo?`${IMAGE_URL}/${post.newsvideo}`:`${post.url}`}
          title={post.title}
          url = {post.url}
          category={post.categoryID}
        />
      ))}
    </div>
  );
};

export default VideoItem;
