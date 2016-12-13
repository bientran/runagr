import { connect } from 'react-redux';
import { logout, clearUser } from '../../actions/session_actions';
import { fetchAllActivities } from '../../actions/activity_actions';
import Dashboard from './dashboard';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  activities: state.activity,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  clearUser: () => dispatch(clearUser()),
  fetchAllActivities: () => dispatch(fetchAllActivities())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Dashboard);
