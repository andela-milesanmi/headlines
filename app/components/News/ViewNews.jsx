import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router';
import Share from '../../share/Share';
import NewsStore from '../../stores/newsStore';
import NewsAction from '../../actions/newsAction';

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
    console.log('current sort value', this.state.currentSortValue);
    console.log('props.sortBy', this.props);
    console.log('currentSource', this.state.currentSource);
  }

  getItemsState() {
    return ({
      currentSource: NewsStore.getSourceValue(),
      allItems: NewsStore.getAll(),
      currentSortValue: NewsStore.getSourceSortBy(),
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
  }

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
                          <a className="btn waves-effect waves-light teal" target="_blank" rel="noopener noreferrer" href={object.url} role="button">Read more »</a>
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

export default ViewNews;
