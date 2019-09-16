class Api::MessageController < ApplicationController

    def index
        @channels = Channel.all
    end

    def create
        @channel = Channel.new(channel_params)
    end

    def update
    end

    def delete
    end

    def channel_params

end