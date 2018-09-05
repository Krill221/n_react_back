class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :name, :default => ''
      t.string :body, :default => ''
      t.timestamps
    end
  end
end
