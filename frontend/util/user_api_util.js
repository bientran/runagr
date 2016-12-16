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

export const updateUser = function(formData, id) {
  return $.ajax({
    method: "PATCH",
    url: `api/users/${id}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
};

export const followUser = function(user, follow) {
  return $.ajax({
    method: "POST",
    url: `api/follows/`,
    data: {follow:{user_id: user.id, follow_id: follow.id}}
  });
};
