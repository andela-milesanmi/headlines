import React from 'react';

class News extends React.Component {
  render() {
    return (
      <div className="news-box">
        <h4 className="news-title">{this.props.title}</h4>
        <h4 className="news-description">{this.props.description}</h4>
        <a href={this.props.href} target="_blank" rel="noopener noreferrer">
          <i href={this.props.href} className="fa fa-external-link" />
        </a>
      </div>
    );
  }
}

export default News;
