import React from 'react';
import SourcesStore from '../../stores/SourcesStore';
import ViewSources from '../News/ViewSources';
import ViewNews from '../News/ViewNews';
import NewsAction from '../../actions/newsAction';

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
    };
    this.getItemsState = this.getItemsState.bind(this);
    this.onChange = this.onChange.bind(this);
    this.setSortBy = this.setSortBy.bind(this);
  }

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
    return (
      <div className="main-component">
        <div className="row">
          <ViewSources sources={this.state.sources} setSortBy={this.setSortBy} />
        </div>
        <ViewNews sortBy={this.state.sortBy} />
      </div>
    );
  }
}

export default Home;
