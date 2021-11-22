import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

export default function ShareButtons({ title, url, twitterHandle, tags }) {
  const buttonColor = { fill: "black" };
  const buttonSize = 35;

  return (
    <React.Fragment>
      <div className="share-buttons-root">
        <h5>Gracias por leer, si deas compartir </h5>
        <div className="share-buttons">
          <FacebookShareButton url={url}>
            <FacebookIcon
              size={buttonSize}
              round={true}
              bgStyle={buttonColor}
            />
          </FacebookShareButton>

          <WhatsappShareButton url={url} title={title}>
            <WhatsappIcon
              size={buttonSize}
              round={true}
              bgStyle={buttonColor}
            />
          </WhatsappShareButton>

          <TwitterShareButton
            url={url}
            title={title}
            via={twitterHandle}
            hashtags={tags}
          >
            <TwitterIcon size={buttonSize} round={true} bgStyle={buttonColor} />
          </TwitterShareButton>

          <LinkedinShareButton url={url}>
            <LinkedinIcon
              size={buttonSize}
              round={true}
              bgStyle={buttonColor}
            />
          </LinkedinShareButton>

          <RedditShareButton url={url} title={title}>
            <RedditIcon size={buttonSize} round={true} bgStyle={buttonColor} />
          </RedditShareButton>

          <EmailShareButton url={url} subject={title}>
            <EmailIcon size={buttonSize} round={true} bgStyle={buttonColor} />
          </EmailShareButton>

          <TelegramShareButton url={url} title={title}>
            <TelegramIcon
              size={buttonSize}
              round={true}
              bgStyle={buttonColor}
            />
          </TelegramShareButton>
        </div>
      </div>
    </React.Fragment>
  );
}
