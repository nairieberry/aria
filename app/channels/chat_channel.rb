class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_for 'chat_channel'
  end

  def speak(data)
    # debugger
    message = Message.create!(body: data['body'], channel_id: data['channel_id'], user_id: data['user_id'])
    # message.owner_id = current_user.id
    if message.save!
      socket = { message: {body: message.body, id: message.id, user_id: message.user_id, channel_id: message.channel_id} }
      ChatChannel.broadcast_to('chat_channel', socket)
    end
  end

  def load
    messages = Message.all.collect(&:body)
    socket = {messages: messages, type: 'messages'}
    ChatChannel.broadcast_to('chat_channel', socket)
  end
  
  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end