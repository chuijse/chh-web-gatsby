module.exports = {
  siteMetadata: {
    title: "Cristian Huijse Portfolio",
    description:
      "This is the professional web dev portfolio of Cristian Huijse.",
    year: "2021",
    author: "Cristian Huijse Heise",
    github: "https://github.com/chuijse",
    linkedin: "https://www.linkedin.com/in/cristianhuijse/",
    url: "http://chh.work",
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
