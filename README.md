This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.


## view the deployment on Vercel

https://react-realestate-app.vercel.app/


Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Bayut API configuration

var axios = require("axios").default;

var options = {
method: 'GET',
url: 'https://bayut.p.rapidapi.com/agencies/list',
params: {query: 'patriot', hitsPerPage: '25', page: '0', lang: 'en'},
headers: {
'x-rapidapi-host': 'bayut.p.rapidapi.com',
'x-rapidapi-key': '65df9cddd1msh1b632c179c457f1p17ea53jsn09d7b2ec7a00'
}
};

axios.request(options).then(function (response) {
console.log(response.data);
}).catch(function (error) {
console.error(error);
});

# add pacakges for the projects

yarn add @chakra-ui/react @emotion/react @emotion/styled axios framer-motion millify nprogress react-horizontal-scrolling-menu react-icons
