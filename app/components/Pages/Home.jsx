import React from 'react';
import SourcesStore from '../../stores/SourcesStore';
import ViewSources from '../News/ViewSources.jsx';
import ViewNews from '../News/ViewNews.jsx';
import NewsAction from '../../actions/newsAction';

/**
 * Class to hold the main component.
 * @extends React.Component
 */
class Home extends React.Component {
  /**
   * Set the Initial conditions for Home component
   * @param {*} props - The properties of the Home Class
   */
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      sortBy: [],
      isLoading: false,
      welcome: true,
    };
    this.getItemsState = this.getItemsState.bind(this);
    this.onChange = this.onChange.bind(this);
    this.setSortBy = this.setSortBy.bind(this);
    this.setIsLoading = this.setIsLoading.bind(this);
    this.unsetWelcome = this.unsetWelcome.bind(this);
  }

  /**
   * Get the initial state from stores
   * @return {*} the current state.
   */
  getInitialState() {
    return this.getItemsState();
  }

  /**
   * Invoked immediately after a component is mounted
   * @return {*} the new state and props
   */
  componentWillMount() {
    SourcesStore.addChangeListener(this.onChange);
    NewsAction.getSources();
  }

  /**
   * The method to set the state of the component when there is a change
   * @return {*} the new state and props
   */
  onChange() {
    const itemState = this.getItemsState();
    this.setState({
      sources: itemState.sources || [],
      isLoading: false,
    });
  }

  /**
   * The method to set the state of the component when there is a change
   * @param {boolean} value - it is either true or false
   * @return {void} returns nothing
   */
  setIsLoading(value) {
    this.setState({
      isLoading: value,
    });
  }
  unsetWelcome() {
    this.setState({
      welcome: false,
    });
  }

  /**
   * The method for handling change events
   * @return {object} the list of sources
   */
  getItemsState() {
    this.getItemsStateNow = '';
    return ({
      sources: SourcesStore.getAll(),
    });
  }

  /**
   * Method to set the currently selected SortBy status
   * @param {string} sortBy sets the sortBy
   * @return {void} sets the current sort by state
   */
  setSortBy(sortBy) {
    this.setState({
      sortBy,
    });
  }

  /**
   * Method to display the main (parent) component.
   * @return {jsx} render the News Content
   */
  render() {
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
        <ViewNews
          sources={this.state.sources}
          sortBy={this.state.sortBy}
          isLoading={this.state.isLoading}
          setIsLoading={this.setIsLoading}
          welcome={this.state.welcome}
          unsetWelcome={this.unsetWelcome}
        />
      </div>
    );
  }
}

export default Home;
