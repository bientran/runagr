class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    @follow.save
    @user = User.find(params[:follow][:follow_id])
    render 'api/users/show'
  end

  private

  def follow_params
    params.require(:follow).permit(:user_id, :follow_id)
  end
end
