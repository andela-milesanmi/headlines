import React from 'react';
import PropTypes from 'prop-types';
import Sources from './News/Sources.jsx';

/**
 * Class to display the share component.
 * @extends React.Component
 * @param {props} props - the parent component state values
 * @return {*} returns the sources component
 */
const DefaultPage = (props) => {
  const sources = props.sources.map(source =>
    <Sources key={source.id} data={source} />
  );
  return (
    <div className="container">
      <div className="row">
        {sources}
      </div>
    </div>
  );
};

/**
 * Set the PropTypes for the Default page
 */
DefaultPage.propTypes = {
  sources: PropTypes.array.isRequired,
};

export default DefaultPage;
