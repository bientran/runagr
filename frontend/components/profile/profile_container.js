import { connect } from 'react-redux';
import { fetchUserDetails } from '../../actions/user_actions';
import { fetchAllActivities } from '../../actions/activity_actions';
import { fetchAllRoutes } from '../../actions/route_actions';

import Profile from './profile';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  user: state.user,
  activities: state.activity,
  routeDetails: state.route
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserDetails: (id) => dispatch(fetchUserDetails(id)),
  fetchAllActivities: (id) => dispatch(fetchAllActivities(id)),
  fetchAllRoutes: (id) => dispatch(fetchAllRoutes(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Profile);
