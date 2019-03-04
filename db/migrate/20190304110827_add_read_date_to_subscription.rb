class AddReadDateToSubscription < ActiveRecord::Migration[5.2]
  def change
    add_column :subscriptions, :read_date, :datetime
  end
end
