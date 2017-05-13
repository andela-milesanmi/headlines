import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {props} props - the properties from the parent class
 * @return {*} render the sources component
*/
const Sources = (props) => {
  let key = '';
  let name = '';
  let description = '';
  if (props.data) {
    key = props.data.id;
    name = props.data.name;
    description = props.data.description;
  }
  return (
    <div key={key}>
      <div className="col s12 m4">
          <div className="card hoverable small">
            <div className="card-content">
              <div className="col s12">
                <span>{name}</span>
                <div className="divider" />
                <span className="light">{description}</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

/**
 * Set the PropTypes for the Sources
 */
Sources.propTypes = {
  data: PropTypes.object,
};

export default Sources;
