import Link from "next/link";
import CategoryPost from "@/components/Home/CategoryPost";
import Gallery from "@/components/Home/gallery";
import PostItem from "@/components/Home/ItemPost";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../../api/api_config";
import { IMAGE_URL } from "../../../api/api_config";
import { useRouter } from "next/router";
import VideoCard from "@/components/Home/Video/VideoItem/VideoCard";
import { Head } from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import BlogPost from "@/components/Blog/blogPost";
let post = {
  IMAGE_URL: '',
  title: '',
  description:'',

};

function BlogsDetails(description,title) {
  const [posts, setPosts] = useState([]);
  const [data2, setdata2] = useState({})

  useEffect(() => {
    axios.get(`${BASE_URL}/news`).then((res) => {

      setPosts(res.data);
      // localStorage.setItem("data",JSON.stringify(res.data))
    });
  }, []);
  const router = useRouter();
  let { id } = router.query;
   const filteredPosts = posts.filter((post) => post.id == id);


  // localStorage.setItem("data2",JSON.stringify(filteredPosts[0]))
  // const data =localStorage.getItem("data2")
  //  let blogTiltle= data.title;
  // setdata2(data)

  //  console.log(data2)
  console.log("id", id);
  const currentUrl = `pakistaneyes.vercel.app/${router.asPath.replace(/ /g, '_')}`;
  const dynamicValue = 'https://pakistaneyes.com/';
  // const encodedUrl = dynamicValue.replace(/ /g, '%20');
  const IMAGE_URL = "https://www.admin.pakistaneyes.com/public/storage/";
  console.log("IMAGE_URL", IMAGE_URL);
  console.log("current Url", currentUrl);

  // const post = {
  //   IMAGE_URL: `${IMAGE_URL}/${post.images}`,
  //   title: post.title,
  //   description: post.description,
  // };


// useEffect(() => {

//   setdata2(data)

// }, [])

// console.log(data)

// console.log(blogTitle)


  return (


    <>

      <div className="flex md:flex-row flex-col ">
        <div className="flex flex-col mx-4 mt-8">
          {filteredPosts.map((post, index) => {
            return (

              <div>
                e{" "}
                <div className="mx-4 md:mx-auto" key={index}>
                  <div className="flex flex-col gap-4 container md:w-[65%] mx-auto my-6 md:mr-[11.5rem]">
                    <div className="flex flex-row justify-between">
                      <p className="text-sm mb-2 mx-2"></p>
                      <div className="bg-blue-600 text-white w-fit rounded-lg px-4">
                        {post.categoryID}
                      </div>
                    </div>
                    <div>
                      <img
                        src={`${IMAGE_URL}/${post.images}`}
                        className="w-full rounded-lg"
                        alt="Image"
                      />
                    </div>
                    <div>
                      <p className="text-lg md:text-xl ">
                        {" "}
                        <div
                          dangerouslySetInnerHTML={{ __html: post.description }}
                        />
                      </p>
                    </div>
                    <ul className="flex gap-4">
                      <li>

                        {/* <ShareButton
                          key={index}
                          compact
                          socialMedia={"facebook"}
                          url="https://www.admin.pakistaneyes.com/public/storage//news_images/9utBNNer5yaUUA3aoIILWpxPcDDEvsaytaxOHGbg.jpg"
                          text={post.title}
                        >
                          <FontAwesomeIcon
                            icon={faFacebook}
                            className="fa-2x text-blue-600 transform hover:scale-125 transition-transform duration-300 ease-in-out"
                          />
                        </ShareButton> */}


<a
  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
    `Check out this post: ${currentUrl}/${post.title} - ${currentUrl}/${post.description}`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <button>
    <FontAwesomeIcon
      icon={faWhatsapp}
      className="fa-2x text-green-600 transform hover:scale-125 transition-transform duration-300 ease-in-out"
    />
  </button>
</a>
                     <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                            `${IMAGE_URL}/${post.images}`,
                            ' ${currentUrl}/${post.title}'
                          )}&title=${encodeURIComponent(

                          )}&description=${encodeURIComponent(
                            ' ${currentUrl}/${post.description}'
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button>
                            <FontAwesomeIcon
                              icon={faFacebook}
                              className="fa-2x text-red-600 transform hover:scale-125 transition-transform duration-300 ease-in-out"
                            />
                          </button>
                        </a>

                        <a
                          target="_blank"
                          rel=""
                          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                            currentUrl
                          )}&quote=${encodeURIComponent(
                            `${post.title}: ${post.description}`
                          )}`}
                        >
                          <FontAwesomeIcon
                            icon={faFacebook}
                            className="fa-2x text-blue-600 transform hover:scale-125 transition-transform duration-300 ease-in-out"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={`https://twitter.com/share?url=${currentUrl}&text=${encodeURIComponent(
                            post.title
                          )}`}
                        >
                          <FontAwesomeIcon
                            icon={faTwitter}
                            className="fa-2x  text-blue-400 transform hover:scale-125  transition-transform duration-300 ease-in-out"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={`https://wa.me/?text=${post.title}%0A${currentUrl}`}
                        >
                          <FontAwesomeIcon
                            icon={faWhatsapp}
                            className="fa-2x  text-green-500 transform hover:scale-125  transition-transform duration-300 ease-in-out"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}`}
                        >
                          <i className="fab fa-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-10 container md:w-[60%] mx-auto my-6 md:mr-[11.5rem]">
                    <div className="md:grid grid-cols-3 gap-2 md:gap-10 container mx-4  w-fit md:w-fit">
                      <VideoCard
                        key={index}
                        thumbnail={`${IMAGE_URL}/${post.images}`}
                        date={post.created_at}
                        video={
                          post.newsvideo
                            ? `${IMAGE_URL}/${post.newsvideo}`
                            : `${post.url}`
                        }
                        title={post.title}
                        url={post.url}
                        category={post.categoryID}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <aside className="md:ml-8 md:mt-64 md:w-96">
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
          </div>
          <div className=" flex flex-col mx-4 mt-8">
            {posts.map((post, index) => (
              <Link
                href={`/Urdu/News/${encodeURIComponent(post.title)}/${post.id}`}
              >
                <PostItem
                  key={index}
                  imageSrc={`${IMAGE_URL}/${post.images}`}
                  title={post.title}
                  date={post.date}
                />
              </Link>
            ))}
          </div>
        </aside>
      </div>
      <div className="flex flex-col md:flex-row mx-4 md:mx-32 gap-10">
        {posts.slice(-4).map((post, index) => (
          <CategoryPost
            key={index}
            imageSrc={`${IMAGE_URL}/${post.images}`}
            category={post.categoryID}
            path={`/Urdu/Categories/${post.categoryID}`}
            date={post.date}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>

      <Gallery />
    </>
  );
}
// export async function getServerSideProps() {
//   try {
//     // Fetch data from the API
//     const response = await fetch(`${BASE_URL}/news`);

//     if (!response.ok) {
//       throw new Error('Failed to fetch data');
//     }

//     // Parse the response JSON
//     const data = await response.json();

//     // Return the data as props
//     return {
//       props: {
//         data,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error.message);

//     // You can also handle errors and return an error prop
//     return {
//       props: {
//         error: 'Failed to fetch data',
//       },
//     };
//   }
// }
export default BlogsDetails;
