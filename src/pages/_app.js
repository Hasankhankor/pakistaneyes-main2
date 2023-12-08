import Head from 'next/head';
import '../styles/globals.css';
import Footer from '@/components/Global/Footer';
import Topbar from '@/components/Global/Topbar';
import Navbar from '@/components/Global/Navbar';
import { BASE_URL, IMAGE_URL } from "../pages/api/api_config";
import ErrorBoundary from '@/components/ErrorBoundary';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const getPostMetadata = async () => {
  const response = await fetch(`${BASE_URL}/news`);
  const data = await response.json();
  return data.map((post) => ({
    slug: post.id.toString(),
  }));
};

export const generateStaticParams = async () => {
  const posts = await getPostMetadata();
  return posts;
};


export default function App({ Component, pageProps, data }) {
  const [posts, setPosts] = useState(data || []);

  useEffect(() => {
    axios.get(`${BASE_URL}/news`).then((res) => {
      setPosts(res.data.data);
      console.log("app js post response: ",res.data);
      setPosts(res.data);
    });
  }, []);

  const router = useRouter();
  let { id } = router.query;
  const filteredPosts = posts ? posts.filter((post) => post.id == id):[];
  console.log("id", id);
  const currentUrl = `pakistaneyes.vercel.app/${router.asPath.replace(/ /g, '_')}`;
  const dynamicValue = 'https://pakistaneyes.com/';
  // const encodedUrl = dynamicValue.replace(/ /g, '%20');
  console.log("IMAGE_URL", IMAGE_URL);
  console.log("current Url", currentUrl);

  return (
    <>
        {filteredPosts.length > 0 && (
        <Head key={filteredPosts[0].id}>
          <title>{filteredPosts[0].title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
          <meta property="og:type" content="This my artical static" />
          <meta property="og:image" content={`${IMAGE_URL}${filteredPosts[0].images}`} />
          <meta property="og:image:alt" content={filteredPosts[0].IMAGE_URL} />
          <meta property="og:title" content={filteredPosts[0].title} />
          <meta property="og:url" content={currentUrl} />
          <meta property="og:description" content="This my description  static" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="pakistaneyes.vercel.com" />
          <meta property="og:image" content={`https://www.admin.pakistaneyes.com${filteredPosts[0].images}`} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={filteredPosts[0].title} />
          <meta name="twitter:description" content={filteredPosts[0].description} />
          <meta name="twitter:image" content={`${IMAGE_URL}/${filteredPosts[0].images}`} />
        </Head>
      )}

      <ErrorBoundary>
        <Topbar />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ErrorBoundary>
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