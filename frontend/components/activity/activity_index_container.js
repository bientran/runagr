import { connect } from 'react-redux';
import { fetchAllActivities } from '../../actions/activity_actions';
import ActivityIndex from './activity_index';

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
)(ActivityIndex);
