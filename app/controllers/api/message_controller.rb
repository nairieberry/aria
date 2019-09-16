class Api::MessageController < ApplicationController

    def index
        @channels = Channel.all
    end

    def create
        @channel = Channel.new(channel_params)
        @channel.owner_id = current_user.id
        if @server.save
            render :show
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def update
        @channel = current_user.channels.find(params[:id])
        @channel.user_id = current_user.id
        if @channel.update(channel_params)
            render :show
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def delete
        @channel = current_user.channels.find(params[:id])
        @channel.destroy!
        render :show
    end

    def channel_params
        params.require(:channel).permit(:channel_name, :description)
    end

end