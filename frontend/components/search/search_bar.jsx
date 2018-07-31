import React from 'react';
import {connect} from 'react-redux';
import { withRouter} from 'react-router-dom';
import {fetchSearchProduct} from '../../actions/product_actions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ query: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchSearchProduct(this.state.query).then(() => {
      this.props.history.push('/search');
    });
    this.setState({query: ''});
  }

  render() {
    console.log(this.state.query);
    return (
      <form className="search" onSubmit={this.onFormSubmit} >
      <div className="search">
        <input
          placeholder="Search for items throughout Hyrule"
          className="search-field"
          value={this.state.query}
          onChange={this.onInputChange} />

        <div>
          <button className="search-button" type='submit' className="search-button">Search</button>
        </div>
        </div>
      </form>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    products: Object.values(state.products)
  };
};


const mapDispatchToProps = dispatch => {
  return {
    fetchSearchProduct: query => dispatch(fetchSearchProduct(query))
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
