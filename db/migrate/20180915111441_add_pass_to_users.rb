class AddPassToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :password, :string, :default => nil
  end
end
