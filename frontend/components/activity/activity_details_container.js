import ActivityDetails from './activity_details';
import { fetchActivityDetails } from '../../actions/activity_actions';
import { fetchRouteDetails } from '../../actions/route_actions';

import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  routeDetails: state.route.route,
  activity: state.activity.activity,
  errors: state.activity.errors,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchActivityDetails: (activity) => dispatch(fetchActivityDetails(activity)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(ActivityDetails);
