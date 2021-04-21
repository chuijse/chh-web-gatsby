import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

const Seo = ({
  globaltitle,
  description,
  keywords,
  title,
  image,
  url,
  author,
  year,
  linkedin,
  github,
}) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        const metaTitle = title || data.site.siteMetadata.title;
        const metaYear = year || data.site.siteMetadata.year;
        const metaUrl = url || data.site.siteMetadata.url;
        //const metaImage = image || data.site.siteMetadata.image
        const metaAuthor = author || data.site.siteMetadata.author;
        const metalinkedin = linkedin || data.site.siteMetadata.linkedin;
        const metaGithub = github || data.site.siteMetadata.github;
        const metaKewords = keywords || [
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
        ];
        const totalMetaKewords = metaKewords.join(`, `);

        return (
          <Helmet
            title={`${metaTitle} | CHH`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                name: `og:title`,
                content: `${metaTitle} | CHH`,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:url`,
                content: metaUrl,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:author`,
                content: metaAuthor,
              },
              {
                name: `year`,
                content: metaYear,
              },
              {
                name: `kewords`,
                content: totalMetaKewords,
              },
              {
                name: `linkedin`,
                content: metalinkedin,
              },
              {
                name: `github`,
                content: metaGithub,
              },
            ]}
          />
        );
      }}
    />
  );
};

export default Seo;

const detailsQuery = graphql`
  query DefaulySEOQuery {
    site {
      siteMetadata {
        author
        title
        description
        year
        github
        linkedin
      }
    }
  }
`;
