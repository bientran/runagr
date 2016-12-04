# Runagr

[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://runagr.herokuapp.com/
[trello]: https://trello.com/b/Bt4zMNjc/runagr

## Minimum Viable Product

Runagr is a web application inspired by Strava built using Ruby on Rails
and React/Redux.  This app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Creating Routes
- [ ] Creating Activities
- [ ] Activity feed
- [ ] Activity stats/totals
- [ ] Production README [sample](docs/production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: User Profile (1 day)

**objective:** User Profiles can be created, edited.

### Phase 3: Route Model, API, and components (2 days)

**Objective:** Routes can be created, read, edited and destroyed through the API.

### Phase 4: Activity Model, API, and components (2 days)

**Objective:** Activities can be created, read, edited and destroyed through the API.

### Phase 5: Activity Feed (1 day)

**Objective:** The Activity Feed will display a user/friends activities on the dashboard.

### Phase 6: Activity Stats (1 day)

**Objective:** The Activity Stats will be display a synopsis of the users week/month of activity.

### Phase 7: Training Log (1 day)

**objective:** Table of users activity details.


### Bonus Features (TBD)
- [ ] Friends
- [ ] Workout Comments
- [ ] Social Feed
- [ ] Training Calendar
- [ ] Infinite Scroll On Feed
