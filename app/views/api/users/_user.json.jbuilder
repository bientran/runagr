json.extract! user, :email, :first_name, :last_name, :id
json.picture_url asset_path(user.picture.url(:original))
