import { connect } from 'react-redux';
import { fetchRouteDetails } from '../../../actions/route_actions';
import ActivityItem from './activity_item';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityItem);
