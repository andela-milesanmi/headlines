import React from 'react';
import Select from 'react-select';
import NewsAction from '../../actions/newsAction';


class ViewSources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: '',
    };
    this.mapStateToOptions = this.mapStateToOptions.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(event) {
    const value = event.value;
    if (value) {
      this.setState({
        currentValue: value,
        newsSource: `Viewing news from ${event.label}`,
      });
      NewsAction.getArticles(value);
      const sortBy = value.split('?sortBy=')[1].split(',');
      this.props.setSortBy(sortBy);
    }
  }

  mapStateToOptions(sources) {
    return sources.map(source => ({
      value: `${source.id}?sortBy=${source.sortBysAvailable.join()}`,
      label: source.name,
    }));
  }


  render() {
    return (
      <div className="">
        <div className="section no-pad-bot">
          <div className="container">
            <h4 className="header center teal-text">Your home of live news</h4>
            <div className="row center">
              <h5 className="header col s12 light">
                Search through our current set of about 70 news sources!!!
              </h5>
            </div>
            <div className="row center valign-wrapper">
              <div className="search-box col s12 m6 offset-m3">
                <Select
                  name="form-field-name"
                  options={this.mapStateToOptions(this.props.sources)}
                  value={this.state.currentValue}
                  className="search-bar"
                  onChange={this.updateSearch}
                  placeholder="Select News Source"
                />
              </div>
            </div>
            <p className="center">{this.state.newsSource}</p>
          </div>
        </div>
      </div>
    );
  }
}

ViewSources.propTypes = {
  sources: React.PropTypes.array.isRequired,
  setSortBy: React.PropTypes.func.isRequired,
};

export default ViewSources;
