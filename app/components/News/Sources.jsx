import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {props} props - the properties from the parent class
 * @return {*} return the sources component
*/
const Sources = props => (
  <div key={props.data.id}>
    <div className="col s12 m4">
        <div className="card hoverable small">
          <div className="card-content">
            <div className="col s12">
              <span>{props.data.name}</span>
              <div className="divider" />
              <span className="light">{props.data.description}</span>
            </div>
          </div>
        </div>
      </div>
  </div>
);

/**
 * Set the PropTypes for the Sources
 */
Sources.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Sources;
