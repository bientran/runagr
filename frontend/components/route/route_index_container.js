import { connect } from 'react-redux';
import { fetchAllRoutes } from '../../actions/route_actions';
import RouteIndex from './route_index';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  routes: state.route
});

const mapDispatchToProps = dispatch => {
  return {
    fetchAllRoutes: (id) => dispatch(fetchAllRoutes(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteIndex);
