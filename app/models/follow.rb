# == Schema Information
#
# Table name: follows
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  follow_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Follow < ApplicationRecord
  validates :user_id, :follow_id, presence: true
  validates_uniqueness_of :user_id, scope: :follow_id
  belongs_to :user
  belongs_to :follower, :class_name => "User", foreign_key: :follow_id
end
