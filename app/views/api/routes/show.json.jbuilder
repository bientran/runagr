json.partial! "api/routes/route", route: @route
json.author @route.user, :first_name, :last_name, :id
json.activities @route.activities.each do |activity|
  # json.set! activity.id do
    json.extract! activity, :title, :hours, :minutes, :seconds, :user
  # end
end
