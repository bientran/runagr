import { connect } from 'react-redux';
import { fetchAllActivities } from '../../../actions/activity_actions';
import { fetchAllRoutes } from '../../../actions/route_actions';
import { fetchCurrentUser } from '../../../actions/user_actions';
import ActivityFeed from './activity_feed';

const mapStateToProps = state => ({
  // currentUser: state.session.currentUser,
  activities: state.activity,
  routes: state.route
});

const mapDispatchToProps = dispatch => {
  return {
    fetchAllActivities: (id) => dispatch(fetchAllActivities(id)),
    fetchAllRoutes: (id) => dispatch(fetchAllRoutes(id)),
    fetchCurrentUser: (id) => dispatch(fetchCurrentUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityFeed);
