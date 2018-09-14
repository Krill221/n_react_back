class AddUuid < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :uuid, :string, :default => ''
  end
end
