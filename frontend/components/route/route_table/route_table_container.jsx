import { connect } from 'react-redux';
import { fetchAllUsers } from '../../actions/user_actions';
import UserIndex from './user_index';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  users: state.user
});

const mapDispatchToProps = dispatch => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserIndex);
