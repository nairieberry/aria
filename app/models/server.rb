# == Schema Information
#
# Table name: servers
#
#  id          :bigint           not null, primary key
#  server_name :string           not null
#  description :string
#  owner_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Server < ApplicationRecord
    validates :server_name, :owner_id, presence: true
    validates :server_name, uniqueness: true

    belongs_to :owner,
        class_name: :User

    has_many :user_servers

    has_many :users,
        through: :user_servers,
        source: :user

    has_many :channels
end