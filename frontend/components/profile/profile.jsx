import React from 'react';
import { Link, withRouter } from 'react-router';
import { values } from 'lodash';
import ProfileFeed from './profile_feed';
import ActivityMonth from '../activity/activity_stats/activity_month';
import ProfileFormContainer from './profile_form_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.editButton = this.editButton.bind(this);
  }
  componentDidMount() {
    this.props.fetchUserDetails(this.props.params.id);
    this.props.fetchAllActivities(this.props.params.id);
    this.props.fetchAllRoutes(this.props.params.id);
  }
  componentDidUpdate() {
    if(!('activity' in this.props.activities) && (values(this.props.activities)[0].user_id != this.props.params.id || values(this.props.routeDetails)[0].user_id != this.props.params.id)){
      this.props.fetchUserDetails(this.props.params.id);
      this.props.fetchAllActivities(this.props.params.id);
      this.props.fetchAllRoutes(this.props.params.id);
    }
  }

  editButton() {
    console.log("DFSFDSFS");
    console.log(this.props);
    if(this.props.currentUser.id == this.props.params.id){
      return <button>HEY THERE</button>;
    }else{
      return <div></div>;
    }
  }

  render() {
    const {user, activities} = this.props;
    if(!user || !activities || 'activity' in activities) {
      return (<div></div>);
    }
    // if('activity' in activities || !activities) {
    //   return (<div></div>);
    // }
    console.log(this.props);

    return(
      <section className="profile">
        <ProfileFeed routeDetails={this.props.routeDetails} activities={activities} />
        {user.first_name}{user.last_name}
        <ActivityMonth activities={values(activities)} />
        {this.editButton()}
        <ProfileFormContainer />
      </section>
    );
  }

}

export default withRouter(Profile);
