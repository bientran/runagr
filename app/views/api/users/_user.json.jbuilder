json.extract! user, :email, :first_name, :last_name, :id#, :follows, :followers
json.picture_url asset_path(user.picture.url(:original))

json.followers user.followers.each do |follower|
  # json.set! activity.id do
    json.extract! follower, :first_name, :last_name, :id
    json.picture_url asset_path(follower.picture.url(:original))

  # end
end
