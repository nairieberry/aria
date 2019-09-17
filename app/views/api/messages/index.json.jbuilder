json.messages do
    @messages.each do |message|
        json.set! message.id do
            json.partial! 'api/messages/message', message: message
        end
    end
end

json.users do
    @messages.each do |message|
        json.set! message.user_id do
        # mimics what the state shape is expecting, user objects should be nested under a key of their own id
            json.partial! 'api/users/user', user: message.user
        end
        # you are using the association from the message model
    end
end

# you can send two objects at a time from one view