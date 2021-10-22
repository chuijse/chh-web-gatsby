import React from "react";
import BlockContent from "@sanity/block-content-to-react";

const serializers = {
  types: {
    blockImage: (props) => (
      <div className="blockImage">
        <img
          width="100%"
          src={props.node.photo.asset.url}
          alt={props.node.caption}
        ></img>
        <p className="caption">{props.node.caption}</p>
      </div>
    ),

    videoEmbed: (props) => (
      <div className="videoEmbedContainer">
        <iframe
          title={props.node.caption}
          width="100%"
          height="500px"
          src={props.node.videoUrl}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen=""
        ></iframe>
        <p className="caption">{props.node.caption}</p>
      </div>
    ),

    oneVideo: (props) => (
      <div className="videosContainer">
        <div className="oneVideoitem">
          <video autoPlay loop controls>
            <source src={props.node.video1.asset.url} type="video/mp4" />
          </video>
          <p className="caption">{props.node.video1.caption}</p>
        </div>
      </div>
    ),

    twoVideos: (props) => (
      <div className="videosContainer">
        <div className="twoVideoitem">
          <video autoPlay loop controls>
            <source src={props.node.video1.asset.url} type="video/mp4" />
          </video>
          <p className="caption">{props.node.video1.caption}</p>
        </div>
        <div className="twoVideoitem">
          <video autoPlay loop controls>
            <source src={props.node.video2.asset.url} type="video/mp4" />
          </video>
          <p className="caption">{props.node.video2.caption}</p>
        </div>
      </div>
    ),

    threeVideos: (props) => (
      <div className="videosContainer">
        <div className="threeVideoitem">
          <video autoPlay loop controls>
            <source src={props.node.video1.asset.url} type="video/mp4" />
          </video>
          <p className="caption">{props.node.video1.caption}</p>
        </div>
        <div className="threeVideoitem">
          <video autoPlay loop controls>
            <source src={props.node.video2.asset.url} type="video/mp4" />
          </video>
          <p className="caption">{props.node.video2.caption}</p>
        </div>
        <div className="threeVideoitem">
          <video autoPlay loop controls>
            <source src={props.node.video3.asset.url} type="video/mp4" />
          </video>
          <p className="caption">{props.node.video3.caption}</p>
        </div>
      </div>
    ),

    block: (props) => {
      const { style = "normal" } = props.node;
      if (/^h\d/.test(style)) {
        const level = style;
        switch (level) {
          case "h1":
            return <h1>{props.children}</h1>;

          case "h2":
            return <h2>{props.children}</h2>;

          case "h3":
            return <h3>{props.children}</h3>;

          case "h4":
            return <h4>{props.children}</h4>;

          case "h5":
            return <h5>{props.children}</h5>;

          case "h6":
            return <h6>{props.children}</h6>;

          case "h7":
            return <h7>{props.children}</h7>;

          default:
            return <span>{props.children}</span>;
        }
      }

      if (style === "normal") {
        return (
          <div className="hyphenation" lang="es">
            <p lang="es">{props.children}</p>
          </div>
        );
      }
    },
  },
};

const PortableText = ({ blocks }) => {
  return <BlockContent blocks={blocks} serializers={serializers} />;
};

export default PortableText;
