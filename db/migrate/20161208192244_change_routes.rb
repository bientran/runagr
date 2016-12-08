class ChangeRoutes < ActiveRecord::Migration[5.0]
  def change
    change_column :routes, :description, :text
  end
end
