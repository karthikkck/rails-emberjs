class User < ActiveRecord::Base

  has_secure_password

  before_create :generate_authentication_token

  attr_accessible :first_name, :last_name, :email, :password, :image

  validates :email, uniqueness: true, presence: true, format: {with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i}

=begin
  def send_password_reset
    random = Time.now.to_i * rand(Time.now.to_i)
    self.password_reset_token = Digest::SHA1.hexdigest(random.to_s + self.email)
    self.password_reset_sent_at = Time.zone.now
    save!
  end
=end

  private

  def generate_authentication_token
    random = Time.now.to_i * rand(Time.now.to_i)
    self.authentication_token = Digest::SHA1.hexdigest(random.to_s + self.email)
  end

end
