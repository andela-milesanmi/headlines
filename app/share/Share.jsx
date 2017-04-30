import React from 'react';
import { ShareButtons, generateShareIcon } from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const WhatsappIcon = generateShareIcon('whatsapp');

class Share extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const shareUrl = this.props.share;
    const title = this.props.title;
    const divStyle = {
      position: 'absolute',
      right: '24px',
    };

    return (
      <div>
        <div className="fixed-action-btn" style={divStyle}>
          <a className="btn-floating btn-large red">
            <span>Share via</span>
            <i className="large material-icons">loyalty</i>
          </a>
          <ul>
            <li>
              <FacebookShareButton url={shareUrl} title={title}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
            </li>
            <li>
              <TwitterShareButton url={shareUrl} title={title}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </li>
            <li>
              <GooglePlusShareButton url={shareUrl}>
                <GooglePlusIcon size={32} round />
              </GooglePlusShareButton>
            </li>
            <li>
              <LinkedinShareButton url={shareUrl} title={title}>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
            </li>
            <li>
              <WhatsappShareButton url={shareUrl} title={title} seperator=" ">
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Share;
