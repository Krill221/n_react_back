class AddMsgTime < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :time, :string, :default => ''
  end
end
