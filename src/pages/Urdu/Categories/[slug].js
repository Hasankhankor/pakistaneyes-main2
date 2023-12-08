import Link from "next/link";
import Image from "next/image";
import BlogPost from "@/components/Blog/blogPost";
import PostItem from "@/components/Home/ItemPost";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { BASE_URL } from "@/pages/api/api_config";
import { IMAGE_URL } from "@/pages/api/api_config";
import axios from "axios";
function Blogs() {
  const router = useRouter();
  const { slug } = router.query;
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);



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

  console.log(slug);
  const filteredPosts = posts.filter(
    (post) => post.categoryID === slug
  );
  return (
    <>

      <div className="flex md:flex-row flex-col ">
        {filteredPosts.length > 0 ? (
          <div className="mx-5 md:mx-auto px-4">
            {filteredPosts.map((post, index) => (
              <Link href={`/Urdu/News/${(post.title.replace(" ","_"))}/${post.id}`}>
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
        ) : (
          <div className="mx-5 text-center md:mt-52 md:mx-auto ">
            <div className="bg-yellow-100 p-20">
              <h2 className="text-2xl font-semibold mb-4">مواد نہیں مل سکا !</h2>
              <p className="text-gray-600">
                ہم وہ پوسٹ نہیں مل سکیں جو آپ تلاش کر رہے تھے۔ یہ ممکن ہے کہ وہ
                حذف ہوگئی ہو یا موجود نہ ہو۔
              </p>
              <div className="mt-6">
                <Link
                  href="/"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  ہوم پیج پر واپس جائیں
                </Link>
              </div>
            </div>
          </div>
        )}
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
            <div>

            </div>

            <div className=" flex flex-col mx-4 mt-8">
                {posts.map((post, index) => (
              <Link href={`/Urdu/News/${encodeURIComponent(post.title)}/${post.id}`}>
                  <PostItem
                    key={index}
                    imageSrc={`${IMAGE_URL}/${post.images}`}
                    title={post.title}
                    date={post.date}
                  />
              </Link>
                ))}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Blogs;
