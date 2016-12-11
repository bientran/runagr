export const createActivity = (activity) => {
  return $.ajax({
    method:"POST",
    url: "api/activities",
    data: { activity }
  });
};

export const fetchActivity = function(id) {
  return $.ajax({
    method: "GET",
    url: `api/activities/${id}`
  });
};

export const fetchAllActivities = function(id) {
  return $.ajax({
    method: "GET",
    url: `api/activities/`,
    data: { id }
  });
};
