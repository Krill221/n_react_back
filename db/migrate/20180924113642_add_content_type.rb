class AddContentType < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :contenttype, :string, :default => 'txt'
  end
end
