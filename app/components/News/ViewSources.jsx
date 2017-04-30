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

  componentWillUnMount() {
    // SourcesStore.removeChangeListener(this.onChange);
  }
  updateSearch(event) {
    const value = event.value;
    if (value) {
      this.setState({ currentValue: value });
      NewsAction.getArticles(value);
      const sortBy = value.split('?sortBy=')[1].split(',');
      this.props.setSortBy(sortBy);
    }
  }

  mapStateToOptions(sources) {
    return sources.map(source => ({
      value: `${source.id}?sortBy=${source.sortBysAvailable.join()}`,
      label: source.name,
      // desc: source.description,
      // category: source.category,
      // sortBy: source.sortBysAvailable,
    }));
  }


  render() {
    // console.log('currently selected item is: ', this.state.currentValue);
    return (
      <div className="parallax-container grey">
        <div className="section no-pad-bot">
          <div className="container">
            <h4 className="header center teal-text text-lighten-4">Your home of live news</h4>
            <div className="row center">
              <h5 className="header col s12 light">Search through our current set of about 70 news sources!!!</h5>
            </div>
            <div className="row center valign-wrapper">
              <div className="search-box col s12 light">
                Select News Source:
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
          </div>
        </div>
        <div className="parallax">
          <img src="../banner-bg.jpg" alt="Mai Headlines Parallax Background" style={{ display: 'block', transform: 'translate3d(-50%, 175px, 0px)' }} />
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
