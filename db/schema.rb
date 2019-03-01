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

ActiveRecord::Schema.define(version: 2019_02_28_145129) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "images", force: :cascade do |t|
    t.string "url"
    t.bigint "task_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["task_id"], name: "index_images_on_task_id"
  end

  create_table "messages", force: :cascade do |t|
    t.string "text"
    t.bigint "task_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "contenttype", default: "txt"
    t.boolean "onserver", default: true
    t.string "time", default: ""
    t.bigint "user_id"
    t.index ["task_id"], name: "index_messages_on_task_id"
    t.index ["user_id"], name: "index_messages_on_user_id"
  end

  create_table "subscriptions", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "task_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "like", default: 0
    t.index ["task_id"], name: "index_subscriptions_on_task_id"
    t.index ["user_id"], name: "index_subscriptions_on_user_id"
  end

  create_table "tasks", force: :cascade do |t|
    t.string "name", default: ""
    t.string "body", default: ""
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "uuid", default: ""
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest"
    t.string "expo_push_token", default: ""
    t.string "image", default: ""
    t.string "flat", default: ""
  end

  add_foreign_key "images", "tasks"
  add_foreign_key "messages", "tasks"
  add_foreign_key "messages", "users"
  add_foreign_key "subscriptions", "tasks"
  add_foreign_key "subscriptions", "users"
end
