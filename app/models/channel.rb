# == Schema Information
#
# Table name: channels
#
#  id           :bigint           not null, primary key
#  channel_name :string           not null
#  description  :string
#  owner_id     :integer          not null
#  server_id    :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Channel < ApplicationRecord
    validates :channel_name, :owner_id, :server_id, presence: true
    validates :channel_name, uniqueness: true

    belongs_to :owner,
        class_name: :User

    belongs_to :server

    has_many :user_channels

    has_many :users,
        through: :user_servers,
        source: :user
end