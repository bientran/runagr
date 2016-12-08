class Route < ApplicationRecord
  validates :title, :description, :user_id, :coordinates, :distance, presence: true
  belongs_to :user


end
