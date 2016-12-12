# == Schema Information
#
# Table name: activities
#
#  id            :integer          not null, primary key
#  route_id      :integer          not null
#  user_id       :integer          not null
#  distance      :decimal(, )      not null
#  hours         :integer          not null
#  minutes       :integer          not null
#  seconds       :integer          not null
#  date          :string           not null
#  time          :string           not null
#  title         :string           not null
#  activity_type :string           not null
#  description   :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Activity < ApplicationRecord
  validates :route_id, :user_id, :description, :title, presence: true
  validates :seconds, :inclusion => 0..59, presence: true
  validates :minutes, :inclusion => 0..59, presence: true
  validates :hours, :inclusion => 0..23, presence: true
  @activity_types = ["Run","Bike"]
  validates :activity_type, :inclusion=> { :in => @activity_types }, presence: true
  validates :date, format: {
        with: /\d{4}\-\d{2}\-\d{2}/,
        message: "must be in the following format: yyyy-mm-dd"}, presence: true
  validates :time, format: {
        with: /\A([01]?[0-9]|2[0-3])\:[0-5][0-9]\z/,
        message: "must be in the following format: hr:min" }, presence: true
  validates :distance, numericality: { :greater_than => 0 }, presence: true

  validate :duration
  def duration
       if (hours + minutes + seconds == 0)
         errors.messages[:base] << "Duration can't be 0"
       end
  end

  # belongs_to :route
  belongs_to :user
end
