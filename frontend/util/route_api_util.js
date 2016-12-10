export const createRoute = (route) => {
  return $.ajax({
    method:"POST",
    url: "api/routes",
    data: { route }
  });
};

export const fetchRoute = function(id) {
  return $.ajax({
    method: "GET",
    url: `api/routes/${id}`
  });
};

export const fetchAllRoutes = function(id) {
  return $.ajax({
    method: "GET",
    url: `api/routes/`,
    data: { id }
  });
};
