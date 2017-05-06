import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import NewsAction from '../../actions/newsAction';

/**
 * Class  displaying the Search Form.
 * @extends React.Component
 */
class ViewSources extends React.Component {
  /**
   * Returns the value in the Search Field
   * @param {object} props - The properties of the News Sources Class
   */
  constructor(props) {
    super(props);
    this.state = {
      currentValue: '',
    };
    this.mapStateToOptions = this.mapStateToOptions.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  /**
   * Method to set the currently selected news source,
   * Method to send request to the News Actions.
   * @param {*} event - the select-box change event
   * @return {void} returns nothing
   */
  updateSearch(event) {
    this.props.setIsLoading(true);
    const value = event.value;
    if (value) {
      this.setState({
        currentValue: value,
        newsSource: `Viewing news from ${event.label}`,
        sourceDescription: event.description,
      });
      NewsAction.getArticles(value);
      const sortBy = value.split('?sortBy=')[1].split(',');
      this.props.setSortBy(sortBy);
    }
  }

  /**
   * Method to generate the options for the Search box.
   * @param {*} sources - an array of all the news sources
   * @return {object} return each news source
   */
  mapStateToOptions(sources) {
    this.sourcesMap = sources;
    return sources.map(source => ({
      value: `${source.id}?sortBy=${source.sortBysAvailable.join()}`,
      label: source.name,
      description: source.description,
    }));
  }

  /**
   * Renders the Search Input
   * @return {*} Search Form
   */
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
            <h5 className="center">{this.state.newsSource}</h5>
            <p className="center light"> {this.state.sourceDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}

/**
 * Set the PropTypes for Search Form
 */
ViewSources.propTypes = {
  sources: PropTypes.array.isRequired,
  setSortBy: PropTypes.func.isRequired,
  setIsLoading: PropTypes.func,
};

export default ViewSources;
