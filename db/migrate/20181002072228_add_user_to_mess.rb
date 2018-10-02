class AddUserToMess < ActiveRecord::Migration[5.2]
  def change
    add_foreign_key :messages, :users
  end
end
