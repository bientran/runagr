## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**NavBarContainer**
 - Logo
 - Links

**DashboardContainer**
 - NavBarContainer
 - ActivityFeedContainer
 - ActivityStatsContainer

**Activities**

**ActivityDetailsContainer**
 - Activity Details

**ActivityFormContainer**
 - NavBarContainer
 - Activity Detail Inputs

**ActivityFeedContainer**
 - ActivityDetailsContainer

**ActivityContainer**
 - NavBarContainer
 - ActivityHeaderContainer
 - MapContainer

**ActivityHeaderContainer**
 - Activity details

**ActivityStatsContainer**
 - Weekly/Monthly run stats

**Routes**

**CreateRouteContainer**
 - NavBarContainer
 - MapContainer
 - RouteFormContainer

**RouteFormContainer**
 - Route Details Inputs

**RouteContainer**
 - NavBarContainer
 - MapContainer
 - RouteDetailsContainer

**RouteDetailsContainer**
 - Route Details

**Profile**

**ProfileContainer**
 - NavBarContainer
 - UserDetailsContainer
 - ActivityFeedContainer

**Map**

**MapContainer**
 - Map Details

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "DashboardContainer" |
| "/signup" | "AuthFormContainer" |
| "/signin" | "AuthFormContainer" |
| "/users/:id" | "ProfileContainer" |
| "/routes/:routeId" | "RouteContainer" |
| "/routes" | "CreateRouteContainer" |
| "/activities/:activityId" | "ActivityContainer" |
| "/activities" | "ActivityFormContainer" |
