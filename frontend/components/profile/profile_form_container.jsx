import { connect } from 'react-redux';
import ProfileForm from './profile_form';
import { updateUser } from '../../actions/user_actions';


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (user,id) => dispatch(updateUser(user,id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(ProfileForm);
