class User < ApplicationRecord
  has_many :subscriptions
  has_many :tasks, through: :subscriptions
  has_many :messages


  has_secure_password

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true

end
