# == Schema Information
#
# Table name: routes
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text             not null
#  user_id     :integer          not null
#  coordinates :json             not null
#  distance    :decimal(, )      not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Route < ApplicationRecord
  validates :title, :description, :user_id, :coordinates, :distance, presence: true
  belongs_to :user
  has_many :activities


end
