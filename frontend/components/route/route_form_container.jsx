import RouteForm from './route_form';
import { createRoute, receiveRouteErrors, clearErrors } from '../../actions/route_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  currentUser: window.currentUser,
  errors: state.route.errors
});

const mapDispatchToProps = (dispatch) => {
  return {
    createRoute: (route) => dispatch(createRoute(route)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(RouteForm);
