import Link from "next/link";
import Image from "next/image";
import BlogPost from "@/components/Blog/blogPost";
import PostItem from "@/components/Home/ItemPost";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../api/api_config";
import { IMAGE_URL } from "../../api/api_config";

function Blogs() {
   const [posts, setPosts] = useState([]);
 useEffect(() => {
   axios
     .get(`${BASE_URL}/news`)
     .then((res) => {
       console.log(res.data);
       setPosts(res.data);
     })
     .catch((error) => {
       console.error("Error fetching data:", error);
     });
 }, []);
  return (
    <>
      <div className="flex md:flex-row flex-col ">
        <div className="mx-5 md:mx-auto px-4">
          {posts.map((post, index) => (
        <Link href={`/Urdu/News/${post.id}`}>
            <BlogPost
              key={index}
              imageSrc={`${IMAGE_URL}/${post.images}`}
              title={post.title}
              description={post.description}
              date={post.created_at}
              category={post.categoryID}
            />
        </Link>
          ))}
          ;
        </div>
        <aside className="md:ml-8 md:mt-64 md:w-[30%]">
        <div className="index ad mx-4">
            <div
              className="overlap-25"
              style={{ width: " 100%", height: "20rem" }}
            >
              <div className="text-wrapper-67">اشتہار</div>
            </div>
          </div>
          <div className="index get-latest-updates mt-5">
            <div className="bg-pink-100 py-8 relative text-center w-auto mx-4 pt-8">
              <div className="text-wrapper-71 mb-5">
                تازہ ترین اپڈیٹس حاصل کریں
              </div>
              <div className="email-adress">
                <div className="overlap-group-15">
                  <input
                    type="email"
                    className="text-wrapper-72 p-2 mb-3"
                    placeholder="آپ کا ای میل پتہ"
                  />
                </div>
              </div>
              <div className="subscribe">
                <div className="overlap-33 mx-auto pt-1">
                  <div className="text-wrapper-73">سبسکرائب</div>
                </div>
              </div>
            </div>
          
          <div className=" flex flex-col mx-4 mt-8">
          <Link href={"/Urdu/blogDetails"}>
                {posts.slice(-6).map((post, index) => (
                  <PostItem
                    key={index}
                    imageSrc={`${IMAGE_URL}/${post.images}`}
                    title={post.title}
                    date={post.created_at}
                  />
                ))}
            </Link>
              </div>
              </div>
        </aside>
      </div>
    </>
  );
}

export default Blogs;
