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

export const updateUser = function(user) {
  return $.ajax({
    method: "PATCH",
    url: `api/users/${14}`,
    data: { user }
  });
};
