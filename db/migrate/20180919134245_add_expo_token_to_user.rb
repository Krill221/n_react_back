class AddExpoTokenToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :expo_push_token, :string, :default => ''
  end
end
