import RouteForm from './route_form';
import { createRoute, receiveRouteErrors, clearRouteErrors } from '../../actions/route_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.route.errors
});

const mapDispatchToProps = (dispatch) => {
  return {
    createRoute: (route) => dispatch(createRoute(route)),
    clearRouteErrors: () => dispatch(clearRouteErrors()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(RouteForm);
