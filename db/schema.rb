# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161215184006) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.integer  "route_id",      null: false
    t.integer  "user_id",       null: false
    t.decimal  "distance",      null: false
    t.integer  "hours",         null: false
    t.integer  "minutes",       null: false
    t.integer  "seconds",       null: false
    t.string   "date",          null: false
    t.string   "time",          null: false
    t.string   "title",         null: false
    t.string   "activity_type", null: false
    t.text     "description",   null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["route_id"], name: "index_activities_on_route_id", using: :btree
    t.index ["user_id"], name: "index_activities_on_user_id", using: :btree
  end

  create_table "follows", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "follow_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_follows_on_user_id", using: :btree
  end

  create_table "routes", force: :cascade do |t|
    t.string   "title",       null: false
    t.text     "description", null: false
    t.integer  "user_id",     null: false
    t.json     "coordinates", null: false
    t.decimal  "distance",    null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["user_id"], name: "index_routes_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                null: false
    t.string   "password_digest",      null: false
    t.string   "session_token",        null: false
    t.string   "first_name",           null: false
    t.string   "last_name",            null: false
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.string   "picture_file_name"
    t.string   "picture_content_type"
    t.integer  "picture_file_size"
    t.datetime "picture_updated_at"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  end

end
