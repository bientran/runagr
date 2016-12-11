import ActivityForm from './activity_form';
import { createActivity } from '../../actions/activity_actions';
import { fetchAllRoutes } from '../../actions/route_actions';

import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  // errors: state.route.errors
  userRoutes: state.route
});

const mapDispatchToProps = (dispatch) => {
  return {
    createActivity: (route) => dispatch(createActivity(route)),
    fetchAllRoutes: (id) => dispatch(fetchAllRoutes(id)),
    // clearRouteErrors: () => dispatch(clearRouteErrors()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(ActivityForm);
