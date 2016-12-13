import { connect } from 'react-redux';
import { fetchRouteDetails } from '../../../actions/route_actions';
import ActivityItem from './activity_item';

const mapStateToProps = state => ({
  // route: state.route
});

const mapDispatchToProps = dispatch => {
  return {
    // fetchRouteDetails: (id) => dispatch(fetchRouteDetails(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityItem);
