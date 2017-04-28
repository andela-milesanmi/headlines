import React from 'react';
import SourcesStore from '../../stores/SourcesStore';
import ViewSources from '../News/ViewSources';
import ViewNews from '../News/ViewNews';
import NewsAction from '../../actions/NewsAction';

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

  // Get initial state from stores
  getInitialState() {
    return this.getItemsState();
  }

  componentWillMount() {
    SourcesStore.addChangeListener(this.onChange);
    NewsAction.getSources();
  }
  onChange() {
    const itemState = this.getItemsState();
    this.setState({
      sources: itemState.sources || [],
    });
  }

  // Method to retrieve state from Stores
  getItemsState() {
    return ({
      sources: SourcesStore.getAll(),
    });
  }
  setSortBy(sortBy) {
    this.setState({
      sortBy,
    });
  }

  render() {
    // console.log('state sources', this.state.sources);
    return (
      <div>
        <div className="row">
          <ViewSources sources={this.state.sources} setSortBy={this.setSortBy} />
        </div>
        <ViewNews sortBy={this.state.sortBy} />
      </div>
    );
  }
}

module.exports = Home;
