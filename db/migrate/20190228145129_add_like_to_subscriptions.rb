class AddLikeToSubscriptions < ActiveRecord::Migration[5.2]
  def change
    add_column :subscriptions, :like, :integer, :default => 0
  end
end
