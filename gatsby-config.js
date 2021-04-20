module.exports = {
  siteMetadata: {
    title: "chh-web-gatsby",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "21ldbrwr",
        dataset: "chh-web-api",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
