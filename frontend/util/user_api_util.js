export const fetchUser = function(id) {
  return $.ajax({
    method: "GET",
    url: `api/users/${id}`
  });
};

export const fetchAllUsers = function() {
  return $.ajax({
    method: "GET",
    url: `api/users/`
  });
};
