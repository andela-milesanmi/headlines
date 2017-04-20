import React from 'react';
import News from './News';
import NewsStore from '../../stores/newsStore';

class NewsList extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  componentWillMount() {
    NewsStore.on('change', () => {
      this.setState({
        articles: NewsStore.getArticles(),
      });
    });
  }

  getNewsObj() {
    console.log('Newslist getNewsObj');
    this.setState({
      articles: NewsStore.getArticles(),
    });
  }

  render() {
    const news = this.state.articles;
    console.log(`NewsList Data ${news}`);

    news.map((item) => {
      return (
        <div>
          <ul>
            <News
              key={item.publishedAt} title={item.title} description={item.description}
              author={item.author} href={item.url} image={item.urlToImage}
            />
          </ul>
        </div>
      );
    });
  }
}

export default NewsList;
