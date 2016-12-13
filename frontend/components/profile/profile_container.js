import { connect } from 'react-redux';
import { fetchUserDetails } from '../../actions/user_actions';

import Profile from './profile';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserDetails: (id) => dispatch(fetchUserDetails(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Profile);
