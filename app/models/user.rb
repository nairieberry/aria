# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :username, :password_digest, :session_token, presence: true
    validates :username, :session_token, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }

    has_many :owned_servers,
        foreign_key: :owner_id,
        class_name: :Server

    has_many :owned_channels,
        foreign_key: :owner_id,
        class_name: :Channel

    has_many :messages

    has_many :user_servers

    has_many :servers,
        through: :user_servers,
        source: :server

    has_many :user_channels

    has_many :channels,
        through: :user_channels,
        source: :channel

    attr_reader :password
    after_initialize :ensure_session_token

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.find_by_credentials(username, password)
        @user = User.find_by(username: username)
        @user && @user.is_password?(password) ? @user : nil
    end

end