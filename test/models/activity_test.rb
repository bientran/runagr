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

require 'test_helper'

class ActivityTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
