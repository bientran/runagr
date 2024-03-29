class CreateRoutes < ActiveRecord::Migration[5.0]
  def change
    create_table :routes do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :user_id, null: false
      t.json :coordinates, null: false
      t.decimal :distance, null: false

      t.timestamps
    end
    add_index :routes, :user_id
  end
end
