import { connect } from 'react-redux';

import { login, logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  demoLogin: () => dispatch(login({username: 'demo user', password: 'password'}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
