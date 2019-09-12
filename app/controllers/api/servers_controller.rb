class Api::ServersController < ApplicationController

    def index
        @servers = Server.all
    end

    def show
        @server = Server.find(params[:id])
    end

    def create
        fix this
        @server = Server.new(server_params)
        @server.user_id = current_user.id
        if @server.save
            render
        else
            render
        end
    end

    def new
        @server = Server.new
    end
    
    def edit
        @server = current_user.servers.find(params[:id])
    end

    def update
        @server = current_user.servers.find(params[:id])
        @server.user_id = current_user.id
        if @server.update(server_params)
            render
        else
            render
        end
    end

    def delete
        fix this
    end

    def server_params
        params.require(:server).permit(:server_name, :description)
    end

end