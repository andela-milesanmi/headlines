import React from 'react';
import Select from 'react-select';
import SourcesStore from '../../stores/SourcesStore';
import NewsAction from '../../actions/NewsAction';


class ViewSources extends React.Component {
  constructor() {
    super();
    this.state = {
      sources: [],
      currentValue: '',
    };
    this.getItemsState = this.getItemsState.bind(this);
    this.onChange = this.onChange.bind(this);
    this.mapStateToOptions = this.mapStateToOptions.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.handleQueryValue = this.handleQueryValue.bind(this);
  }
  // Method to retrieve state from Stores
  getItemsState() {
    return {
      sources: SourcesStore.getAll(),
    };
  }
  // Get initial state from stores
  getInitialState() {
    return this.getItemsState();
  }
  onChange() {
    const itemState = this.getItemsState();
    this.setState({
      sources: itemState.sources || [],
    });
  }
  componentWillMount() {
    SourcesStore.addChangeListener(this.onChange);
    NewsAction.getSources();
  }
  componentWillUnMount() {
    SourcesStore.removeChangeListener(this.onChange);
  }
  updateSearch(event) {
    // console.log('event', event.value);
    this.setState({ currentValue: event.value });
    NewsAction.getArticles(event.value);
  }
  handleQueryValue() {
    const source = this.state.currentValue.value;
    // console.log(source);
    NewsAction.getArticles({ source, sortby: 'top' });
  }

  mapStateToOptions(sources) {
    // console.log(sources);
    return sources.map(source => ({
      value: source.id,
      label: source.name,
      desc: source.description,
      category: source.category,
      sortBy: source.sortBysAvailable,
    }));
  }

  render() {
    return (
      <div className="search-box">
        <Select
          name="form-field-name"
          options={this.mapStateToOptions(this.state.sources)}
          value={this.state.currentValue}
          class="search-bar"
          onChange={this.updateSearch}
          // onValueClick={this.handleQueryValue(this)}
          clearable={true}
          ref="search-bar"
        />
        <span><button onClick={this.handleQueryValue}>
          Search Headlines </button></span>
      </div>
    );
  }
}

export default ViewSources;
