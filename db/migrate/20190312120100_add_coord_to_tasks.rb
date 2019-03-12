class AddCoordToTasks < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :lat, :string, :default => '0'
    add_column :tasks, :lng, :string, :default => '0'
  end
end
