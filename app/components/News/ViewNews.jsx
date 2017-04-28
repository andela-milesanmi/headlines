import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router';
import NewsStore from '../../stores/NewsStore';
// import SortBysStore from '../../stores/SortBysStore';
import NewsAction from '../../actions/NewsAction';

class ViewNews extends React.Component {
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

  componentWillMount() {
    NewsStore.addChangeListener(this.onChange);
  }

  onChange() {
    this.setState(this.getItemsState());
    // currentSource: NewsStore.getSourceValue();
    console.log('current sort value', this.state.currentSortValue);
    console.log('props.sortBy', this.props);
    // console.log('this.state', this.state);
    // console.log('currentSortValue', this.state.currentSortValue);
    console.log('currentSource', this.state.currentSource);
  }

  getItemsState() {
    return ({
      currentSource: NewsStore.getSourceValue(),
      allItems: NewsStore.getAll(),
      currentSortValue: NewsStore.getSourceSortBy(),
      // orderBy: SortBysStore.getAll(),
    });
  }

  getOptions(arr) {
    return arr.map(val => ({
      value: val,
      label: val,
    }));
  }

  updateSearch(event) {
    const value = event.value;
    this.setState({ currentSortValue: value });
    const urlString = `${this.state.currentSource}&sortBy=${value}`;
    NewsAction.getArticles(urlString, value);
    console.log('urlString', urlString);
  }

  componentWillUnMount() {
    NewsStore.removeChangeListener(this.onChange);
    // SortBysStore.removeChangeListener(this.onChange);
  }

  render() {
    const myArticles = this.state.allItems;
    return (
      <div className="">
        Sort by: <Select
          name="sort-by"
          options={this.getOptions(this.props.sortBy)}
          value={this.state.currentSortValue}
          className="search-bar"
          onChange={this.updateSearch}
          placeholder="Sort News By"
        />
        <div className="content">
          <h3>News Articles</h3>
          {
            myArticles.map((object) => {
              return (
                <div key={object.url}>
                  <div className="col s10 m4">
                    <div className="card medium blue-grey">
                      <div className="card-image">
                        <img alt={object.name} src={object.urlToImage} />
                      </div>
                      <div className="card-content">
                        <h6><Link to={object.url}>{object.title}</Link></h6>
                        <p>{object.description}</p>
                      </div>
                      <div className="card-action">
                        <a className="btn waves-effect waves-light blue" target="_blank" rel="noopener noreferrer" href={object.url} role="button">Read more »</a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default ViewNews;
