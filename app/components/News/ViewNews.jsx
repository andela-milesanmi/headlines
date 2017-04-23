import React from 'react';
import NewsStore from '../../stores/NewsStore';
import NewsAction from '../../actions/NewsAction';

class ViewNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allItems: NewsStore.getAll(),
    };
    this.getItemsState = this.getItemsState.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  getItemsState() {
    return {
      allItems: NewsStore.getAll(),
    };
  }
  componentWillMount() {
    NewsAction.getArticles();
    // console.log('NewsAction.getArticles . ', NewsAction.getArticles());
    NewsStore.addChangeListener(this.onChange);
  }
  onChange() {
    // console.log('this.getItemsState()', this.getItemsState());
    this.setState(this.getItemsState());
  }
  componentWillUnMount() {
    NewsStore.removeChangeListener(this.onChange);
  }

  render() {
    const myArticles = this.state.allItems;

    return (
      <div className="search-box">
        <h3>News Articles</h3>
        <hr className="section-heading-spacer" />
        {
          myArticles.map((object) => {
            const articleDivStyle = {
              maxHeight: '400px',
              border: '1px solid #000000',
              padding: '5px',
              margin: '5px',
            };
            const newsImageStyle = {
              height: '100px',
              background: `url(${object.urlToImage}) center center`,
              width: '100%',
              backgroundSize: 'cover',
            };
            return (
              <div key={object.url} className="col-xs-6 col-lg-3" style={articleDivStyle}>
                <a href={object.url}>
                  <h4 className="section-heading">{ object.title }</h4>
                </a>
                <pre>Date: { object.publishedAt }</pre>
                <div style={newsImageStyle} />
                <p className="">{ object.description }</p>
                <a className="btn btn-info" href={object.url} role="button">Read more »</a>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default ViewNews;
