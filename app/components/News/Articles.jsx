import React from 'react';
import PropTypes from 'prop-types';
import Share from '../share/Share.jsx';

/**
 * @param {props} props - the state properties from the parent class
 * @return {*} return the Articles component
*/
const Articles = props => (
  <div key={props.data.url}>
    <div className="col s10 m6">
      <div className="card medium hoverable z-depth-5">
        <div className="card-image">
          <img alt={props.data.name} src={props.data.urlToImage} />
        </div>
        <div className="card-content">
          <h6>{props.data.title}</h6>
          <div className="col s12 light" />
        </div>
        <div className="card-action">
          <Share share={props.data.url} title={props.data.title} />
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

/**
 * Set the PropTypes for Articles
 */
Articles.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Articles;
