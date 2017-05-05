import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Share from '../../share/Share';
import NewsStore from '../../stores/newsStore';
import NewsAction from '../../actions/newsAction';

/**
 * Class to hold the View News component.
 * @extends React.Component
 */
class ViewNews extends React.Component {
  /**
   * Set the Initial conditions for showing the News
   * @param {object} props - The properties of the News Class
   */
  constructor(props) {
    super(props);
    this.state = {
      allItems: [],
      orderBy: [],
      currentSource: '',
      currentSortValue: '',
    };
    this.getItemsState = this.getItemsState.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getOptions = this.getOptions.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.getNewSortByValue = this.updateSearch.bind(this);
    this.getNewSortByValue = this.getNewSortByValue.bind(this);
  }

  /**
   * Invoked immediately after a component is mounted
   * @return {void} returns nothing
   */
  componentWillMount() {
    NewsStore.addChangeListener(this.onChange);
  }

  /**
   * The method to set the state of the component when there is a change
   * @return {void} returns nothing
   */
  onChange() {
    this.setState(this.getItemsState());
  }

  /**
   * The method that for handling change
   * @return {object} sets the state based on value
   */
  getItemsState() {
    this.getItemsStateNow = '';
    return ({
      currentSource: NewsStore.getSourceValue(),
      allItems: NewsStore.getAll(),
      currentSortValue: NewsStore.getSourceSortBy(),
    });
  }

  /**
   * The method that for handling change
   * @param {array} value - the selected value from select field
   * @return {*} updates the select box options
   */
  getOptions(array) {
    this.arrayMap = array;
    return array.map(val => ({
      value: val,
      label: val,
    }));
  }

  /**
   * Method to set the current Sort value and send request to the News Actions.
   * @param {*} event
   * @return {void} returns nothing
   */
  updateSearch(event) {
    const value = event.value;
    this.setState({ currentSortValue: value });
    const urlString = `${this.state.currentSource}&sortBy=${value}`;
    NewsAction.getArticles(urlString, value);
  }

   /**
   * Invoked immediately when a component is unmounted
   * @return {void} returns nothing
   */
  componentWillUnMount() {
    NewsStore.removeChangeListener(this.onChange);
  }

  /**
   * Display the News Component
   * @return {jsx} The News Content
   */
  render() {
    const myArticles = this.state.allItems;

    return (
      <div className="">
        <div className="section">
          <div className="container">
            <div className="row center valign-wrapper">
              <div className="col s12 m6 offset-m3 light">
                <Select
                  name="sort-by"
                  options={this.getOptions(this.props.sortBy)}
                  value={this.state.currentSortValue}
                  onChange={this.updateSearch}
                  placeholder="Sort News By"
                />
              </div>
            </div>
          </div>
          <div className="row">
            {
              myArticles.map((object) => {
                return (
                  <div key={object.url}>
                    <div className="col s10 m4">
                      <div className="card large">
                        <div className="card-image">
                          <img alt={object.name} src={object.urlToImage} />
                        </div>
                        <div className="card-content">
                          <h6><Link to={object.url}>{object.title}</Link></h6>
                          <div className="col s12 light">
                            {object.description}
                            <Share share={object.url} title={object.title} />
                          </div>
                        </div>
                        <div className="card-action">
                          <a
                            className="btn waves-effect waves-light teal"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={object.url}
                            role="button"
                          >Read more »</a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

/**
 * Set the PropTypes for News
 */
ViewNews.propTypes = {
  sortBy: PropTypes.array.isRequired,
};

export default ViewNews;
