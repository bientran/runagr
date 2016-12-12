import { connect } from 'react-redux';
import { fetchAllActivities } from '../../../actions/activity_actions';
import ActivityFeed from './activity_feed';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  activities: state.activity
});

const mapDispatchToProps = dispatch => {
  return {
    fetchAllActivities: (id) => dispatch(fetchAllActivities(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityFeed);
