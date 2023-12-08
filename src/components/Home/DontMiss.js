import Link from "next/link";
import Image from "next/image";
import PostItem from "./ItemPost";
import CategoryPost from "./CategoryPost";

import axios from "axios";
import { useState, useEffect } from 'react';
import { BASE_URL, IMAGE_URL } from "@/pages/api/api_config";

const DontMiss = () => {
  const [banner,setBanner]=useState([]);
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState("recent");
  const [tabPosts, setTabPosts] = useState({
    recent: [],
    popular: [],
    mostViewed: [],
  });

  const randomNumber = Math.floor(Math.random() * (10 - 3 + 1)) + 3;

  const loadTabPosts = (tab) => {
    let filteredPosts = [];
    if (tab == "recent") {
      filteredPosts = posts;
    } else if (tab === "popular") {
      filteredPosts = posts.slice(0, randomNumber).filter((post) => post);
    } else if (tab === "mostViewed") {
      filteredPosts = posts.slice(-5, -1).filter((post) => post);
    }
    setTabPosts({
      ...tabPosts,
      [tab]: filteredPosts,
    });
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    loadTabPosts(tab);
  };
  useEffect(() => {
    axios.get(`${BASE_URL}/categories`).then((res) => {
      setCategories(res.data);

    });
    axios.get(`${BASE_URL}/banner`).then((res) => {
      setBanner(res.data);
    });
    axios.get(`${BASE_URL}/news`).then((res) => {
      setPosts(res.data);
      loadTabPosts("recent");
      console.log("recent tab is loaded");
    });
  }, []);

// const encodedTitle = encodeURIComponent(post.title);
  return (


        <div className="flex flex-col md:flex-row justify-center gap-10 md:container md:mx-auto">
          <div className="md:max-w-[65%]">
            <div className="flex flex-col md:flex-row container mx-auto gap-14">
              <div className="post-2 mx-2 md:w-[60%]">
                {posts.slice(-1).map((post, index) => (
                  <CategoryPost
                    key={index}
                    imageSrc={`${IMAGE_URL}/${post.images}`}
                    title={post.title}
                    description={
                      post.description.length > 30
                        ? post.description.substring(0, 150) + "..."
                        : post.description
                    }
                    date={post.created_at}
                    category={post.categoryID}
                    path={`/Urdu/Categories/${post.categoryID}`}
                  />
                ))}
              </div>
              <div className="w-full">
      <div className="index ">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row"></div>
          <nav className="text-white container mx-auto hidden md:block">
            <ul className="flex flex-col sm:flex-row gap-2 sm:gap-[1.5rem] p-4 font-bold items-center">

              <li className="hover:border-b-4 hover:ease-in border-b-4 bg-red-500 ">
                <Link className="text-wrapper-37 px-7" href="/Urdu/News/blogs">
                  تمام
                </Link>
              </li>

              {categories.map((category, index) => (
                <li key={index} className="hover:border-b-4 hover:ease-in bg-red-500 ">
                  <Link
                    href={`/Urdu/Categories/${category.name}`}
                    className="text-wrapper-37 px-2 md:px-7 text-center md:text-right"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <hr class="bg-red-400 mb-4 p-0" style={{ height: "5px" }} />
        </div>
              <div className="grid-cols-1 md:flex-col md:max-w-[50%]">
                {posts.slice(0,5).map((post, index) => (
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
          </div>
          <hr class="bg-red-400 mb-4 p-0" style={{ height: "3px" }} />
          <div className="grid grid-cols-1 md:w-96 md:mt-[-0.75rem]">
            <div className="flex gap-14 md:gap-16 mx-auto md:mx-auto mt-[-86px] md:mt-[-10%]">

              <div
                className={`font-bold ${
                  activeTab === "popular" ? "active-tab" : ""
                }`}
                onClick={() => handleTabChange("popular")}
              >
                مقبول
              </div>
              <div
                className={`font-bold ${
                  activeTab === "mostViewed" ? "active-tab" : ""
                }`}
                onClick={() => handleTabChange("mostViewed")}
              >
                زیادہ ملاحظات
              </div>
            </div>
            {tabPosts[activeTab].slice(-5).map((post, index) => (
             <Link href={`/Urdu/News/${encodeURIComponent(post.title)}/${post.id}`} className="md:w-auto w-[60%] mx-auto">
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
        {/* section end */}

        <div className="overlap-56 container mx-auto my-8 hidden md:block">

        <img className="w-full" src={`${IMAGE_URL}/${banner.image}`} alt="Banner Image" />







          <div className="fairytale-fame-sehar px-4">
            <p className="text-2xl">ویب ڈیسک آج</p>
            'پریوں کی کہانی،' شہرت سحر خان نے انکشاف کیا۔دو خوبیاں وہ شوہر میں
            تلاش کرتی ہیں۔
          </div>

          <div className="rectangle-5" />
          <div className="text-wrapper-97">زندگی</div>
        </div>
        {/* banner end */}
      </div>
    </div>
  );
};
export default DontMiss;
