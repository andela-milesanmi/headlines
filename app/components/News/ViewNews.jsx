import React from 'react';
import PropTypes from 'prop-types';
import NewsStore from '../../stores/newsStore';
import NewsAction from '../../actions/newsAction';
import NewsList from './NewsList.jsx';
import Articles from './Articles.jsx';
import Loading from '../loader.jsx';

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
    this.props.setIsLoading(false);
    console.log('isloading props', this.props.isLoading);
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
   * Display the News Component
   * @return {jsx} The News Content
   */
  render() {
    const myArticles = this.state.allItems.map(item => <Articles key={item.url} data={item} />);
    // console.log(myArticles);
    const sortBarOptions = this.getOptions(this.props.sortBy);
    if (this.props.isLoading) {
      return (
        <Loading />
      );
    }
    return (
      <NewsList
        articles={myArticles}
        sortOptions={sortBarOptions}
        currentSortValue={this.state.currentSortValue}
        updateSearch={this.updateSearch}
      />
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
