class User < ApplicationRecord
  has_many :subscriptions
  has_many :tasks, through: :subscriptions
end
