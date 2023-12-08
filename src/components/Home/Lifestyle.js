import Link from "next/link";
import Image from "next/image";
import Banner from "./banner";
import CategoryPost from "./CategoryPost";
import SubLifeStyles from "./LifeStyle/SubLifeStyles";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL, IMAGE_URL } from "@/pages/api/api_config";

const LifeStyle = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
     axios.get(`${BASE_URL}/categories`).then((res) => {
   setCategories(res.data);
   console.log(res.data);
 }).catch((error) => {
   console.error("categories not fetched!",error);
 })
    axios.get(`${BASE_URL}/news`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
}, []);

return (
  <>
    <div className="container mx-auto index ">
      <nav className="text-white container md:flex mx-auto flex gap-24 hidden md:block ">
        <div className="text-red-400 text-wrapper-48 flex items-center">
        {categories.length > 0 && categories[1].name}
        </div>
        <ul className="flex flex-col sm:flex-row gap-2 sm:gap-16 p-3 font-bold items-center">

          <li className="hover:border-b-4 hover:ease-in border-b-4 bg-red-500 ">
            <Link className="text-wrapper-37 px-3" href="/Urdu/News/blogs">
              تمام
            </Link>
          </li>
          {
           categories.length > 0 && (categories[1].subcategories.map((subCat,index)=>(
           <li className="hover:border-b-4 hover:ease-in border-b-4 bg-red-500 " key={index}>
            <Link className="text-wrapper-37 px-3" href={`/Urdu/Categories/${subCat.subcategory}`}>
                { subCat.subcategory}
            </Link>
          </li>
           ))
          )}
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
      <hr class="bg-red-400 mb-4 p-0 w-full  md:block hidden" style={{ height: "3px" }} />
      <div className="flex gap-16">
        <div className="md:w-9/12 gap-28">
          <div className="flex flex-col md:flex-row md:w-4/12 gap-14">
            {categories.length > 0  && (
              posts
                .filter((post) => post.categoryID === categories[1].name).slice(-2)
                .map((post, index) => (
                  <CategoryPost
                    key={index}
                    imageSrc={`${IMAGE_URL}/${post.images}`}
                    title={post.title}
                    description={post.description}
                    date={post.created_at}
                    category={post.categoryID}
                    path ={`/Urdu/News/${post.categoryID}`}
                  />
                ))
            )}

<br>
</br>
          </div>
          {/* new Section start */}
          <div>
            <SubLifeStyles />

          </div>
        </div>
        {/* sidebar section */}
        <div className="stay-connected hidden md:block w-[20%] mt-[-45px]">

          <div className="categories ">
            <div className="my-4">
              <div className="text-wrapper-74">اقسام</div>
              <div className="overlap-34"></div>
            </div>
            <hr class="border-red-400 h-2 w-[66%]" />
            {
              categories.length > 0 &&

            categories.map((category, index)=>(
              <Link href={`/Urdu/News/${category.name}`}>
            <div key={index} className="life-style-2 flex font-bold justify-between life-style-2 my-5 text-gray-500">
              <div className="flex gap-2">
                <img
                  className="frame-7"
                  alt="Frame"
                  src="https://cdn.animaapp.com/projects/650436ea563939b650df9455/releases/650437a496d31c08b0a413c5/img/frame-19.svg"
                />
                <div className="text-wrapper-75">{category.name}</div>
              </div>
              <div className="element">
                <div className="overlap-group-16">
                  <div className="text-wrapper-76 bg-red-400 text-white font-bold px-2">
                    {category.subcategories.length}
                  </div>
                </div>
              </div>
            </div>
            </Link>
            ))}
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Banner />

    </div>
  </>
);
};
export default LifeStyle;
