import React from 'react';
import { ShareButtons, generateShareIcon } from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');

class Share extends React.Component {
  render() {
    const shareUrl = this.props.share;
    const title = this.props.title;

    return (
      <div className="col s12 m6">
        <li className="waves-effect waves-light">
          <FacebookShareButton url={shareUrl} title={title}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </li>
        <li className="waves-effect waves-light">
          <TwitterShareButton url={shareUrl} title={title}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </li>
        <li className="waves-effect waves-light">
          <GooglePlusShareButton url={shareUrl}>
            <GooglePlusIcon size={32} round />
          </GooglePlusShareButton>
        </li>
        <li className="waves-effect waves-light">
          <LinkedinShareButton url={shareUrl} title={title}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </li>
      </div>
    );
  }
}

Share.propTypes = {
  share: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
};

export default Share;
