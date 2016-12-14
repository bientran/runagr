import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';

import ProfileForm from './profile_form';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(updateUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(ProfileForm);
