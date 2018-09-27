class AddOnServer < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :onserver, :boolean, :default => true
  end
end
