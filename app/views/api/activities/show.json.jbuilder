json.partial! "api/activities/activity", activity: @activity
json.author @activity.user, :first_name, :last_name, :id
