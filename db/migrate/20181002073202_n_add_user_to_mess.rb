class NAddUserToMess < ActiveRecord::Migration[5.2]
  def change
    #remove_foreign_key :messages, :users
    add_reference :messages, :user, foreign_key: true
  end
end
