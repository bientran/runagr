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
    this.follow = this.follow.bind(this);
    this.followButton = this.followButton.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchUserDetails(this.props.params.id);
    this.props.fetchAllActivities([this.props.params.id]);
    this.props.fetchAllRoutes(this.props.params.id);
  }
  componentDidUpdate() {

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.props.fetchUserDetails(this.props.params.id);
      this.props.fetchAllActivities(this.props.params.id);
      this.props.fetchAllRoutes(this.props.params.id);
    }
  }

  editButton() {
    if(this.props.currentUser.id == this.props.params.id){
      return <button>HEY THERE</button>;
    }else{
      return <div></div>;
    }
  }

  follow(user,follow){
    return () => {
      const promise = this.props.followUser(user,follow).then(() => {

        this.props.fetchCurrentUser(this.props.currentUser.id);
      });

    }
  }

  followButton(){
    let follows = [this.props.currentUser.id];
    let followed = false;
    values(this.props.currentUser.followers).forEach((follow) => {
      if (this.props.user.id === follow.id){
        followed = true
      }
      follows.push(follow.id);
    });
    if(this.props.currentUser.id === this.props.user.id){
      return <div></div>
    }
    if(followed) {
      return <div className="follow-button followed">Following</div>;
    } else {
    return <button className="follow-button not-followed" onClick={this.follow(this.props.currentUser,this.props.user)}>Follow</button>;
    }
  }

  render() {
    const {user, activities} = this.props;
    if(!user || !activities || 'activity' in activities) {
      return (<div></div>);
    }
    let name = `${user.first_name} ${user.last_name}`;
    let profileName;
    if(name.length > 30) {
      profileName = <h1 id="too-big">{user.first_name} {user.last_name}</h1>;
    } else {
      profileName = <h1>{user.first_name} {user.last_name}</h1>;
    }
    let form = (this.props.currentUser.id === this.props.user.id) ? <ProfileFormContainer user={this.props.user} /> : <div></div>;
    return(
      <section className="profile">
        <section className="profile-details">
          <section className="profile-name-picture">
            {profileName}
            <img className="profile-picture" src={user.picture_url}></img>
          </section>
          <ActivityMonth activities={values(activities)} />
        </section>
        <h2>Recent Activity</h2>
        {this.followButton()}
        <ProfileFeed routeDetails={this.props.routeDetails} activities={activities} />
        {form}
      </section>
    );
  }

}

export default withRouter(Profile);
