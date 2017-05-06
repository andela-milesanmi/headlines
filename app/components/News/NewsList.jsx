import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
// import { Link } from 'react-router';
import Share from '../share/Share.jsx';

const NewsList = props => (
  <div className="section">
    <div className="container">
      <div className="row center valign-wrapper">
        <div className="col s12 m6 offset-m3 light">
          <Select
            name="sort-by"
            options={props.sortOptions}
            value={props.currentSortValue}
            onChange={props.updateSearch}
            placeholder="Sort News By"
          />
        </div>
      </div>
    </div>
    <div className="row">
      {props.articles}
    </div>
  </div>
);

/**
 * Set the PropTypes for News
 */
NewsList.propTypes = {
  articles: PropTypes.array.isRequired,
  sortOptions: PropTypes.array.isRequired,
  currentSortValue: PropTypes.string.isRequired,
  updateSearch: PropTypes.func.isRequired,
};

export default NewsList;
