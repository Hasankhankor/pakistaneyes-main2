import Link from "next/link";
import Image from "next/image";
import PostItem from "./ItemPost";
import StayConnected from "./StayConnected/StayConnected";
import { useEffect, useState } from "react";
import CategoryPost from "./CategoryPost";
import axios from "axios";
import { BASE_URL } from "@/pages/api/api_config";
import { IMAGE_URL } from "@/pages/api/api_config";
const SportsImage1 = "/assets/SportsImage1.png";
const SportsImage2 = "/assets/SportsImage2.png";
const SportsImage3 = "/assets/SportsImage3.png";
const SportsImage4 = "/assets/SportsImage4.png";
const SportsImage5 = "/assets/SportsImage5.png";

const CategoryImg1 = "/blog/blog3.jpg";
const CategoryImg2 = "/blog/blog2.jpg";
const SportsSpotlight = "/assets/SportsSpotlight.png";
const Sports = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/categories`)
      .then((res) => {
        console.log(res.data);
        setCategories(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
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
      <div className="container mx-auto index">
        <nav className="text-white container mx-auto hidden md:block">
          <ul className="flex flex-col sm:flex-row gap-2 sm:gap-16 font-bold items-center">
            <div className="text-red-400 text-wrapper-48 flex items-center">
             {
             categories.length>0 && categories[0].name
             }
            </div>
            <li className="hover:ease-in bg-red-500 px-3">
              <Link className="text-wrapper-37" href="/Urdu/News/blogs">
               تمام
              </Link>
            </li>
            {
              categories.length>0 &&(
                categories[0].subcategories.map((subCat,index) => (
              <li className="hover:border-b-4 hover:ease-in border-b-4 bg-red-500 ">
               <Link className="text-wrapper-37 px-3" href={`/Urdu/Categories/${subCat.subcategory}`} key={index}>
               { subCat.subcategory}
               </Link>
             </li>
                ))
              )}
            <div className="button flex gap-2 mx-4 md:mx-auto">
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
        <hr class="bg-red-400 mb-4 p-0" style={{ height: "3px" }} />
        <div className="flex flex-col md:flex-row gap-16 ">
          <div className="flex flex-col md:flex-row md:w-9/12 gap-10 mx-4">
            {posts
              .filter((post) => post.categoryID === categories[0].name)
              .slice(-1)
              .map((post, index) => (

                <CategoryPost
                  key={index}
                  imageSrc={`${IMAGE_URL}/${post.images}`}
                  title={post.title}
                  description={post.description}
                  date={post.created_at}
                  category={post.categoryID}
                  path ={`/Urdu/Categories/${post.categoryID}`}
                />

              ))}

            <div className="w-full grid grid-cols-2 md:grid-cols-1 gap-4  md:ml-auto">
              {posts.filter((post) => post.categoryID === categories[0].name).slice(-5).map((post, index) => (
                <Link href={`/Urdu/News/${encodeURIComponent(post.title)}/${post.id}`}>
                <PostItem
                  key={index}
                  imageSrc={`${IMAGE_URL}/${post.images}`}
                  title={post.title}
                  date={post.created_at}
                />
                </Link>
              ))}
            </div>
          </div>
<br>
</br>
          {/* sidebar section */}
          <div>
            <div className="index ad mx-4">
              <div
                className="overlap-25"
                style={{ width: " 100%", height: "20rem" }}
              >
                <div className="text-wrapper-67">اشتہار</div>
              </div>
            </div>
            <div className="index mb-4 mt-20">
              <div className="bg-pink-100 py-8 relative text-center w-fit px-5 md:px-auto md:w-auto mx-4 pt-8">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sports;
