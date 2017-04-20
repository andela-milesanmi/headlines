import React from 'react';
import axios from 'axios';
import Select from 'react-select';

import * as NewsActions from '../../actions/newsAction';


class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      source: [],
      currentValue: '',
    };
    this.getSource = this.getSources.bind(this);
  }

  componentWillMount() {
    this.getSource();
  }

  getSources(lang) {
    const options = [];
    // let lang = 'en';
    axios(`https://newsapi.org/v1/sources?${lang}`).then((res) => {
      if (res.data.message) {
        throw new Error(res.data.message);
      } else {
        const source = res.data.sources;
        source.forEach((item) => {
          options.push({ value: item.id, label: item.name });
        });
      }
    }, (res) => {
      console.log(res.data.message);
      throw new Error(res.data.message);
    });
    this.setState({
      source: options,
    });
  }

  getValue(value) {
    this.setState({
      currentValue: value,
    });
  }

  searchNews() {
    const source = this.state.currentValue.value;
    if (source) {
      console.log(source);
      NewsActions.getNews({
        source: source,
        sortby: 'top',
      });
    }
  }

  render() {
    return (
      <div className="search-box">
        <Select
          name="form-field-name"
          options={this.state.source}
          value={this.state.currentValue}
          class="search-bar"
          onChange={this.getValue.bind(this)}
          clearable={true}
          ref="search-bar"
        />
        <span><button onClick={this.searchNews(this)}> Search Headlines </button></span>
      </div>
    );
  }
}

export default SearchBar;
