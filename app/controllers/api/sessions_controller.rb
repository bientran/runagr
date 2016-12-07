class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      login!(@user)
      render :show
    else
      render json: ["The username or password did not match. Please try again."], status: 401
    end

  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: ["Not Logged In"], status: 404
    end
  end
end
