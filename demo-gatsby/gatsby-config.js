/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */


require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
// dotenv.config({
//   path: `.env.${process.env.NODE_ENV}`,
// });

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ["post","about","home"],
  // collectionTypes:[
  //   {
  //     singularName: "post",
  //   },
  //   {
  //     singularName: "home",
  //   },
  //   {
  //     singularName: "about",
  //   }
  // ]
};

module.exports = {
  siteMetadata: {
    title: "Blog website",
    description: "Blog for adventures",
    copyright: "This website is copyright 2024 blog post",
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
  ],
};
