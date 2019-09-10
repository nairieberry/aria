class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login(@user)
            render 'api/users/show'
        else
            render json: ["Wrong credentials or account doesn't exist"], status: 401
        end
    end

    def destroy
        @user = User.find(current_user.id)
        logout
        render 'api/users/show'
    end

end