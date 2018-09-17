class User < ApplicationRecord
  has_many :subscriptions
  has_many :tasks, through: :subscriptions

  has_secure_password

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true


  def generate_access_token
    #crypt = ActiveSupport::MessageEncryptor.new(Rails.application.credentials.secret_key_base.byteslice(0..31))
    crypt = ActiveSupport::MessageEncryptor.new("iliketomoveitiliketomoveitiliketomoveitiliketomoveitiliketomoveitiliketomoveitiliketomoveit".byteslice(0..31))
    token = crypt.encrypt_and_sign("user-id"+self.id.to_s)
    return token
  end

  def self.find_by_token token
    crypt = ActiveSupport::MessageEncryptor.new("iliketomoveitiliketomoveitiliketomoveitiliketomoveitiliketomoveitiliketomoveitiliketomoveit".byteslice(0..31))
    res = crypt.decrypt_and_verify token
    user_id = res.gsub('user-id', '').to_i
    return User.find_by id: user_id
  end

end
