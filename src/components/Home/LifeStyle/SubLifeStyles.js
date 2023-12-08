import LifeStyleCard from "./LifeStyleCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { BASE_URL } from "@/pages/api/api_config";
import { IMAGE_URL } from "@/pages/api/api_config";
const SubLifeStyle1 = "/assets/SubLifeStyle1.png";
const SubLifeStyle2 = "/assets/SubLifeStyle2.png";
const SubLifeStyle3 = "/assets/SubLifeStyle3.png";
const SubLifeStyle4 = "/assets/SubLifeStyle4.png";

const SubLifeStyles = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/news`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    axios
      .get(`${BASE_URL}/categories`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="md:grid grid-cols-1 md:grid-cols-2 gap-4 p-0 my-8 ">
      {posts
        .filter((post) => post.categoryID === categories[1].name)
        .slice(-4)
        .map((post, index) => (
          <Link href={`/Urdu/News/${encodeURIComponent(post.title)}/${post.id}`}>
            <LifeStyleCard
              key={index}
              image={`${IMAGE_URL}/${post.images}`}
              date={post.created_at}
              title={post.title}
            />
          </Link>
        ))}
    </div>
  );
};

export default SubLifeStyles;
