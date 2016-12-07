import { connect } from 'react-redux';
import { logout, clearUser } from '../../actions/session_actions';
import Dashboard from './dashboard';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  clearUser: () => dispatch(clearUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Dashboard);
