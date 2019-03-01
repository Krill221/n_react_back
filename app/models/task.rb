class Task < ApplicationRecord
  has_many :subscriptions
  has_many :users, through: :subscriptions
  has_many :images

  def likes
    self.subscriptions.where(:like => 1).sum(:like)
  end

  def dis_likes
    self.subscriptions.where(:like => -1).sum(:like)
  end

end
