import { connect } from 'react-redux';
import React from 'react';
import Products from './products';

const mapStateToProps = ({ errors }) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
export default connect(mapStateToProps, mapDispatchToProps)(Products);
