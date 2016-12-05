```js
{
  session: {
    currentUser: {
      id: 1,
      email: "test@example.com",
      firstName: "John",
      lastName: "Smith",
      imageUrl: "some url"
    },
    errors: []
  },
  routes: {
    1: {
      id: 1,
      title: "Sample Route",
      description: "Loop of somewhere",
      user_id: 1,
      map: {
        map details...
      }
    }
  },
  activities: {
    1: {
      id: 1,
      title: "Sample Run",
      user_id: 1,
      description: "I ran fast",
      route_id: 1,
      duration: 60,
      distance: 10,
      date: "Sun Dec 04 2016 19:44:12 GMT-0500 (EST)",
      startTime: "19:44:12",
    }
  }
}
```
