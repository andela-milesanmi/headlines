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
   * Method to query the News Action based on the Search box change
   */
  componentWillMount() {
    SourcesStore.addChangeListener(this.onChange);
    NewsAction.getSources();
  }

  /**
   * Function to set the state of the component.
   */
  onChange() {
    const itemState = this.getItemsState();
    this.setState({
      sources: itemState.sources || [],
    });
  }

  /**
   * Method to retrieve the sources from the Store
   */
  getItemsState() {
    return ({
      sources: SourcesStore.getAll(),
    });
  }

  /**
   * Method to set the currently selected SortBy status
   * @param {} sortBy
   */
  setSortBy(sortBy) {
    this.setState({
      sortBy,
    });
  }

  /**
   * Method to display the main (parent) component.
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

module.exports = Home;
