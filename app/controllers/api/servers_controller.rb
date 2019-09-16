class Api::ServersController < ApplicationController

    def index
        @servers = Server.all
    end

    def show
        @server = Server.find(params[:id])
    end

    def create
        @server = Server.new(server_params)
        @server.owner_id = current_user.id
        if @server.save
            render :show
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    # you don't need new and edit when you're doing a react project

    # def new
    #     @server = Server.new
    # end
    
    # def edit
    #     @server = current_user.servers.find(params[:id])
    # end

    def update
        @server = current_user.servers.find(params[:id])
        @server.user_id = current_user.id
        if @server.update(server_params)
            render :show
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def delete
        @server = current_user.servers.find(params[:id])
        @server.destroy!
        render :show
    end

    # put what the user needs to put into the form in the params
    # usually like username and password for user params
    def server_params
        params.require(:server).permit(:server_name, :description)
    end

end