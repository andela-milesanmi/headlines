import React from 'react';
import Select from 'react-select';
// import SourcesStore from '../../stores/SourcesStore';
import NewsAction from '../../actions/NewsAction';


class ViewSources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: '',
    };
    // this.getItemsState = this.getItemsState.bind(this);
    // this.onChange = this.onChange.bind(this);
    this.mapStateToOptions = this.mapStateToOptions.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    // this.handleQueryValue = this.handleQueryValue.bind(this);
    // this.saveSortToLocalStorage = this.saveSortToLocalStorage.bind(this);
  }
  // // Method to retrieve state from Stores
  // getItemsState() {
  //   return {
  //     sources: SourcesStore.getAll(),
  //   };
  // }
  // // Get initial state from stores
  // getInitialState() {
  //   return this.getItemsState();
  // }
  // onChange() {
  //   const itemState = this.getItemsState();
  //   this.setState({
  //     sources: itemState.sources || [],
  //   });
  // }
  // componentWillMount() {
  //   // SourcesStore.addChangeListener(this.onChange);
  //   NewsAction.getSources();
  // }
  componentWillUnMount() {
    // SourcesStore.removeChangeListener(this.onChange);
  }
  updateSearch(event) {
    const value = event.value;
    if (value) {
      // console.log('event', event.value);
      this.setState({ currentValue: value });
      NewsAction.getArticles(value);
      // window.localStorage.setItem();
      const sortBy = value.split('?sortBy=')[1].split(',');
      this.props.setSortBy(sortBy);
      // window.localStorage.setItem('sort', sourceValue);
      // console.log(sourceValue, 'my sorts value');
      // console.log('what i just did', Window.localStorage);
      // console.log(source.sortBysAvailable);
    }
  }
  // handleQueryValue() {
  //   const source = this.state.currentValue.value;
  //   if (source !== undefined) {
  //     NewsAction.getArticles({ source, sortby: 'top' });
  //   } else {
  //     alert('Please select a news source');
  //   }
  // }

  mapStateToOptions(sources) {
    return sources.map(source => ({
      value: `${source.id}?sortBy=${source.sortBysAvailable.join()}`,
      label: source.name,
      // desc: source.description,
      // category: source.category,
      // sortBy: source.sortBysAvailable,
    }));
  }

  // saveSortToLocalStorage(sortA, sortB) {
  //   window.localStorage.setItem(sortA, sortB);
  // }

  render() {
    // console.log('currently selected item is: ', this.state.currentValue);
    return (
      <div className="search-box">
        Select News Source:
        <Select
          name="form-field-name"
          options={this.mapStateToOptions(this.props.sources)}
          value={this.state.currentValue}
          class="search-bar"
          onChange={this.updateSearch}
          placeholder="Select News Source"
        />
      </div>
    );
  }
}

ViewSources.propTypes = {
  sources: React.PropTypes.array.isRequired,
  setSortBy: React.PropTypes.func.isRequired,
};

export default ViewSources;
