class CreateActivities < ActiveRecord::Migration[5.0]
  def change
    create_table :activities do |t|
      t.integer :route_id, null: false
      t.integer :user_id, null: false
      t.decimal :distance, null: false
      t.integer :hours, null: false
      t.integer :minutes, null: false
      t.integer :seconds, null: false
      t.string :date, null: false
      t.string :time, null: false
      t.string :title, null: false
      t.string :activity_type, null: false
      t.text :description, null: false

      t.timestamps
    end
    add_index :activities, :route_id
    add_index :activities, :user_id
  end
end
