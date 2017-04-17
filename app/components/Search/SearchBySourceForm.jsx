import React from 'react';

class SearchBySourceForm extends React.Component {
  constructor(props) {
    super();
  }
  onFormSubmit(e) {
    e.preventDefault();

    const source = this.refs.source.value;

    if (source.length > 0) {
      this.refs.source.value = '';
      this.props.onSearch(source);
    }
  }
  render() {
    return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="text" ref="source" focus="focused" />
            <button>Submit</button>
          </form>
        </div>
    );
  }
}

export default SearchBySourceForm;
