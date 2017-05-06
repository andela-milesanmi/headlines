import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Share from '../share/Share.jsx';

const Articles = (props) => {
  // console.log('props', props);
  return (
    <div key={props.data.url}>
      <div className="col s10 m4">
        <div className="card large">
          <div className="card-image">
            <img alt={props.data.name} src={props.data.urlToImage} />
          </div>
          <div className="card-content">
            <h6><Link to={props.data.url}>{props.data.title}</Link></h6>
            <div className="col s12 light">
              {props.data.description}
            </div>
          </div>
          <div className="card-action">
            <Share share={props.data.url} title={props.data.title} />
            {props.data.props}
            <a
              className="btn waves-effect waves-light teal"
              target="_blank"
              rel="noopener noreferrer"
              href={props.data.url}
            >Read more »</a>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Set the PropTypes for News
 */
Articles.propTypes = {
  data: PropTypes.object.isRequired,
  // url: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
  // urlToImage: PropTypes.string.isRequired,
  // title: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
};

export default Articles;
