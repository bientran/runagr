class Api::ActivitiesController < ApplicationController
  def create
    @activity = Activity.new(activity_params)
    if @activity.save
      render :show
    else
      render json: @activity.errors.full_messages, status: 422
    end
  end

  def index
    @activities = Activity.where(user_id: params[:id])
    render :index
  end

  def show
    @activity = Activity.find(params[:id])
    render :show
  end


  private

  def activity_params
    params.require(:activity).permit(:title,:description,:hours,:minutes,:seconds,:distance,:user_id,:route_id,:activity_type,:date,:time)
  end
end
