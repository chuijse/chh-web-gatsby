module.exports = {
  siteMetadata: {
    title: "Cristian Huijse Portfolio",
    titleTemplate: "%s | CHH",
    description:
      "This is the professional web dev portfolio of Cristian Huijse.",
    year: "2021",
    author: "Cristian Huijse Heise",
    github: "https://github.com/chuijse",
    linkedin: "https://www.linkedin.com/in/cristianhuijse/",
    url: "http://chh.work",
    image: "/images/logoSeo.png",
    keywords: [
      "CHH",
      "Cristian",
      "Huijse",
      "Heise",
      "Diseño Industrial",
      "Industrial Design",
      "Interacción digital",
      "Digital Interaction Design",
      "Interacción Física",
      "Physical Interaction",
      "ux",
      "ui",
      "diseño web",
      "Web Design",
      "diseño",
      "Design",
      "Modelado 3d",
      "3d modeling",
      "Programming",
      "porgramación",
    ],
  },
  plugins: [
    /*{
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.js`),
      },
    },*/
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "21ldbrwr",
        dataset: "chh-web-api",
      },
    },
    "gatsby-plugin-anchor-links",
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
