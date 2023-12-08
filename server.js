const express = require('express');
const axios = require('axios');
const next = require('next');
// import { getServerSideProps } from 'your-server-side-props-file-path'; // Replace with the actual path

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const IMAGE_URL = 'https://www.admin.pakistaneyes.com/public/storage/';
const BASE_URL = 'https://pakistaneyes.com';

const getPostById = (postId) => {
  return {
    postId: postId,
    title: 'Default Title',
    description: 'Default Description',
    images: 'default-image.jpg',
  };
};

app.prepare().then(() => {
  const server = express();

  server.get('/api/news', async (req, res) => {
    try {
      const newsResponse = await axios.get(`${BASE_URL}/news`);
      // res.json(newsResponse.data);
      res.send(newsResponse.data);
    } catch (error) {
      console.error('Error fetching news data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  server.get('/Urdu/:postId', async (req, res) => {
    try {
      const postId = req.params.postId;

      // Fetch data from the API using getServerSideProps
      const { data, error } = await getServerSideProps();

      if (error) {
        console.error('Error fetching data:', error.message);
        return res.status(500).send('Internal Server Error');
      }

      // Use the fetched data
      const post = data.find((post) => post.postId === postId);

      if (!post) {
        console.error('Post not found');
        return res.status(404).send('Post Not Found');
      }

      const IMAGE_URL_POST = `${IMAGE_URL}/${post.images}`;

      // Replace title and meta tags in the HTML response
      const htmlData = await app.renderToHTML(req, res, '/post', { postId });
      const modifiedHtmlData = htmlData
        .replace("<title>Invofy Shop</title>", `<title>${post.title}</title>`)
        .replace('__META_OG_TITLE__', post.title)
        .replace('__META_OG_DESCRIPTION__', post.description)
        .replace('__META_DESCRIPTION__', post.description);

      // Using Head component to set meta tags
      const headTags = `
        <Head key={${post.postId}}>
          <title>${post.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
          <meta property="og:image:alt" content="${post.title}" />
          <meta property="og:title" content="${post.title}" />
          <meta property="og:url" content={currentUrl} />
          <meta property="og:description" content="This my description static" />
          <meta property="og:site_name" content="pakistaneyes.vercel.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="${post.title}" />
          <meta name="twitter:description" content="${post.description}" />
          <meta name="twitter:image" content="${IMAGE_URL_POST}" />
        </Head>
      `;

      res.setHeader('X-OG-Image', IMAGE_URL_POST);
      res.setHeader('Cache-Control', 'no-store');
      res.send(`${headTags}${modifiedHtmlData}`);
    } catch (error) {
      console.error('Error rendering blog post page:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:3000`);
  });
});
