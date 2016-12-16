@activities.each do |activity|
  json.set! activity.id do
    json.partial! "api/activities/activity", activity: activity
    json.author activity.user, :first_name, :last_name, :id

  end
end
