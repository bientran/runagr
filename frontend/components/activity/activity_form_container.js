import ActivityForm from './activity_form';
import { createActivity, clearActivityErrors } from '../../actions/activity_actions';
import { fetchAllRoutes } from '../../actions/route_actions';

import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.activity.errors,
  userRoutes: state.route
});

const mapDispatchToProps = (dispatch) => {
  return {
    createActivity: (activity) => dispatch(createActivity(activity)),
    fetchAllRoutes: (id) => dispatch(fetchAllRoutes(id)),
    clearActivityErrors: () => dispatch(clearActivityErrors()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(ActivityForm);
