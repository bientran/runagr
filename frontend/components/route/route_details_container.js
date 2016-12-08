import { connect } from 'react-redux';
import { fetchRouteDetails } from '../../actions/route_actions';
import RouteDetails from './route_details';

const mapStateToProps = state => {

  return({
    route: state.route.route
  });
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRouteDetails: (id) => dispatch(fetchRouteDetails(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteDetails);
