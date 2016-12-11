import ActivityMap from './activity_map';
import { fetchRouteDetails } from '../../actions/route_actions';

import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  routeDetails: state.route.route,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRouteDetails: (id) => dispatch(fetchRouteDetails(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(ActivityMap);
