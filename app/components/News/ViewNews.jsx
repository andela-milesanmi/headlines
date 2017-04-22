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
    //console.log('NewsStore.getAll()', NewsStore.getAll());
    return {
      allItems: NewsStore.getAll(),
    };
  }
  componentWillMount() {
    NewsAction.getArticles();
    console.log('NewsAction.getArticles . ', NewsAction.getArticles());
    // NewsStore.on('change', this.onChange);
    NewsStore.addChangeListener(this.onChange);
  }
  onChange() {
    console.log('this.getItemsState()', this.getItemsState());
    this.setState(this.getItemsState());
  }
  componentWillUnMount() {
    NewsStore.removeChangeListener(this.onChange);
  }

  renderNews() {
    const myArticles = this.state.allItems;
    myArticles.forEach(article => {
      // console.log('Article.Title', article.title);
      return <p>Article Title: { article.title }</p>;
    });
  }
  render() {
    const myArticles = this.state.allItems;
    // console.log('this.state.allItems', this.state.allItems);
    // console.log('NewsList Data . ', myArticles);
    // const articleContent = this.state.allArticles.map(article => {
    //   return (
    //     <li>{ articleContent.author }</li>
    //   );
    // });
   
    return (
      <div className="search-box">
        <h3>News Articles</h3>
        <p>There is a news article here</p>
        {
          myArticles.map(function(object) {
            return (
              <div>
                <a href={object.url} >
                  <h4>{ object.title }</h4>
                  <pre>Date: { object.publishedAt }</pre>
                  <p>{ object.description }</p>
                  <img alt={object.title} src={object.urlToImage} height="200" />
                </a>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default ViewNews;
