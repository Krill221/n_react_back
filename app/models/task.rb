class Task < ApplicationRecord
  has_many :subscriptions
  has_many :users, through: :subscriptions
  has_many :images
end
