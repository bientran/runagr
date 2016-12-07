import SessionForm from './session_form';
import { login, logout, signup, clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: (user) => dispatch(processForm(user)),
    clearErrors: () => dispatch(clearErrors()),
    formType: formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(SessionForm);
