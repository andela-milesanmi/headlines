import React from 'react';
// import Loader from 'react-loaders';
import SourcesStore from '../../stores/SourcesStore';
import ViewSources from '../News/ViewSources.jsx';
import ViewNews from '../News/ViewNews.jsx';
import NewsAction from '../../actions/newsAction';

// let loader = <Loader type="ball-spin-fade-loader" />;
/**
 * Class to hold the main component.
 * @extends React.Component
 */
class Home extends React.Component {
  /**
   * Set the Initial conditions for Home component
   * @param {object} props - The properties of the Home Class
   */
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      sortBy: [],
      isLoading: false,
    };
    this.getItemsState = this.getItemsState.bind(this);
    this.onChange = this.onChange.bind(this);
    this.setSortBy = this.setSortBy.bind(this);
    this.setIsLoading = this.setIsLoading.bind(this);
  }

  // function renderLoader() {
  //   return <Loader type="line-scale" active />
  // }

  /**
   * Get the initial state from stores
   */
  getInitialState() {
    return this.getItemsState();
  }

  /**
   * Invoked immediately after a component is mounted
   * @return {void} returns nothing
   */
  componentWillMount() {
    SourcesStore.addChangeListener(this.onChange);
    NewsAction.getSources();
  }

  /**
   * The method to set the state of the component when there is a change
   * @return {void} returns nothing
   */
  onChange() {
    const itemState = this.getItemsState();
    this.setState({
      sources: itemState.sources || [],
      isLoading: false,
    });
    console.log('unset is loading');
  }

  setIsLoading(value) {
    console.log('set is loading');
    this.setState({
      isLoading: value,
    });
  }

  /**
   * The method that for handling change
   * @return {object} sets the state based on value
   */
  getItemsState() {
    this.getItemsStateNow = '';
    return ({
      sources: SourcesStore.getAll(),
    });
  }

  /**
   * Method to set the currently selected SortBy status
   * @param {string} sortBy
   */
  setSortBy(sortBy) {
    this.setState({
      sortBy,
    });
  }

  /**
   * Method to display the main (parent) component.
   * @return {jsx} The News Content
   */
  render() {
    // this.setState({
    //   isLoading: false,
    // });
    // let loading = '';
    // if (this.state.isLoading) {
    //   loading = <Loading />;
    // }
    console.log('this.setIsLoading', this.state.isLoading);
    return (
      <div className="main-component">
        <div className="row">
          <ViewSources
            sources={this.state.sources}
            setSortBy={this.setSortBy}
            loading={this.state.isLoading}
            setIsLoading={this.setIsLoading}
          />
        </div>
        {/*<div className="row">
          {loading}
        </div>*/}
        <ViewNews
          sortBy={this.state.sortBy}
          isLoading={this.state.isLoading}
          setIsLoading={this.setIsLoading}
        />
      </div>
    );
  }
}

export default Home;
