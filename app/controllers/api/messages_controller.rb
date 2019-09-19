class Api::MessagesController < ApplicationController

    def index
        @messages = Message.all
    end

    def create
        @message = Message.new(messages_params)
        @message.owner_id = current_user.id
        if @message.save!
            render :show
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    def update
        @messages = current_user.messages.find(params[:id])
        @messages.user_id = current_user.id
        if @messages.update(messages_params)
            render :show
        else
            render json: @messages.errors.full_messages, status: 422
        end
    end

    def delete
        @messages = current_user.messages.find(params[:id])
        @messages.destroy!
        render :show
    end

    def messages_params
        params.permit(:body, :channel_id)
    end

end