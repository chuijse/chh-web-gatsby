import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";

const Seo = ({ description, keywords, title, image, article }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    year,
    author,
    linkedin,
    github,
    defaultKeywords,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: `${siteUrl}${pathname}`,
    year: year,
    author: author,
    linkedin: linkedin,
    github: github,
    keywords: defaultKeywords,
  };

  const totalMetaKewords = keywords
    ? seo.keywords.join(`, `) + `, ` + keywords.join(`, `)
    : seo.keywords.join(`, `);

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="year" content={seo.year} />
      <meta name="author" content={seo.author} />
      <meta name="linkedin" content={seo.linkedin} />
      <meta name="github" content={seo.github} />
      <meta name="keywords" content={totalMetaKewords} />

      <meta property="og:url" content={seo.url} />
      {article ? (
        <meta property="og:type" content="article" />
      ) : (
        <meta property="og:type" content="website" />
      )}
      <meta property="og:title" content={seo.title + " | CHH"} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:author" content={seo.author} />
      <meta property="og: image" content={seo.image} />

      <meta name="twitter:title" content={seo.title + " | CHH"} />
      <meta name="twitter:description" content={seo.description} />
      {image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        author
        year
        github
        linkedin
        defaultKeywords: keywords
      }
    }
  }
`;
export default Seo;
