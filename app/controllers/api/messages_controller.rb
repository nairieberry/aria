class Api::MessagesController < ApplicationController

    def index
        @messages = Messages.all
    end

    def create
        @messages = Messages.new(messages_params)
        @messages.owner_id = current_user.id
        if @server.save
            render :show
        else
            render json: @messages.errors.full_messages, status: 422
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
        params.require(:messages).permit(:body)
    end

end