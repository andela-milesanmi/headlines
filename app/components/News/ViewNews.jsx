import React from 'react';
import Select from 'react-select';
import NewsStore from '../../stores/NewsStore';
import SortBysStore from '../../stores/SortBysStore';
import NewsAction from '../../actions/NewsAction';

class ViewNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allItems: [],
      sortBys: "",
    };
    this.getItemsState = this.getItemsState.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  getItemsState() {
    return {
      allItems: NewsStore.getAll(),
      sortBys: SortBysStore.getAll(),
    };
  }
  componentWillMount() {
    // NewsAction.getArticles();
    // console.log('NewsAction.getArticles . ', NewsAction.getArticles());
    NewsStore.addChangeListener(this.onChange);
    // SortBysStore.addChangeListener(this.onChange);
  }
  onChange() {
    // console.log('this.getItemsState()', this.getItemsState());
    this.setState(this.getItemsState());
  }
  componentWillUnMount() {
    NewsStore.removeChangeListener(this.onChange);
    SortBysStore.removeChangeListener(this.onChange);
  }

  render() {
    let sortsLists = '<option>Select A filter Option</option>';
    if (this.state.sortBys !== '') {
      const sortBysSplit = this.state.sortBys.split('=')[1];
      const mySortBys = sortBysSplit.split(',');
      sortsLists = mySortBys.map(function (sortsList) {
        return <option value={sortsList}>{sortsList}</option>;
        // console.log('SortedSortBys', sortsList);
      });
      return mySortBys.map(mySortBy => ({
        value: `${mySortBy}`,
        label: mySortBy,
      }));
    }
    // console.log('sortsLists', sortsLists);
    const myArticles = this.state.allItems;
    console.log('this.props.location', this.props.location);
    // const mySortBy = mySortBys.split(',');
    // let sortByReq = req.split('?')[1];
    // console.log('myArticles', myArticles);
    // console.log('this.state', this.state);

    return (
      <div className="search-box">
        <select>{sortsLists}</select>
        <h3>News Articles</h3>
        {
          myArticles.map((object) => {
            return (
              <div>
                <div className="col s10 m4">
                  <div className="card large">
                    <div className="card-image">
                      <img alt={object.name} src={object.urlToImage} />
                    </div>
                    <div className="card-content">
                      <h6><a href={object.url}>{object.title}</a></h6>
                      <p>{object.description}</p>
                    </div>
                    <div className="card-action">
                      <a className="btn waves-effect waves-light blue" href={object.url} role="button">Read more »</a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default ViewNews;
