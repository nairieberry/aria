# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

ActiveRecord::Base.transaction do

    Message.destroy_all
    Channel.destroy_all
    Server.destroy_all
    User.destroy_all

    user = User.create!({
        username: 'user',
        password: 'password',
    })

    user2 = User.create!({
        username: 'user2',
        password: 'password',
    })

    user3 = User.create!({
        username: 'user3',
        password: 'password',
    })

    server = Server.create!({
        server_name: 'server',
        description: 'this is a server',
        owner_id: user.id,
    })

    server2 = Server.create!({
        server_name: 'server2',
        description: 'this is a server 2',
        owner_id: user2.id,
    })

    server3 = Server.create!({
        server_name: 'server3',
        description: 'this is a server 3',
        owner_id: user3.id,
    })

    server4 = Server.create!({
        server_name: 'server4',
        description: 'this is a server 4',
        owner_id: user.id,
    })

    server5 = Server.create!({
        server_name: 'server5',
        description: 'this is a server 5',
        owner_id: user2.id,
    })

    server6 = Server.create!({
        server_name: 'server6',
        description: 'this is a server 6',
        owner_id: user3.id,
    })

    channel = Channel.create!({
        channel_name: 'channel',
        description: 'this is a channel',
        owner_id: user.id,
        server_id: server.id,
    })

    channel2 = Channel.create!({
        channel_name: 'channel2',
        description: 'this is a channel 2',
        owner_id: user2.id,
        server_id: server.id,
    })

    channel3 = Channel.create!({
        channel_name: 'channel3',
        description: 'this is a channel 3',
        owner_id: user3.id,
        server_id: server.id,
    })

    channel4 = Channel.create!({
        channel_name: 'channel4',
        description: 'this is a channel 4',
        owner_id: user.id,
        server_id: server2.id,
    })

    channel5 = Channel.create!({
        channel_name: 'channel5',
        description: 'this is a channel 5',
        owner_id: user2.id,
        server_id: server2.id,
    })

    channel6 = Channel.create!({
        channel_name: 'channel6',
        description: 'this is a channel 6',
        owner_id: user3.id,
        server_id: server3.id,
    })

    Message.create!({
        body: 'this is a message',
        user_id: user.id,
        channel_id: channel.id,
    })

    Message.create!({
        body: 'this is a message 2',
        user_id: user2.id,
        channel_id: channel.id,
    })

    Message.create!({
        body: 'this is a message 3',
        user_id: user3.id,
        channel_id: channel.id,
    })

    Message.create!({
        body: 'this is a message 4',
        user_id: user.id,
        channel_id: channel2.id,
    })

    Message.create!({
        body: 'this is a message 5',
        user_id: user2.id,
        channel_id: channel2.id,
    })

    Message.create!({
        body: 'this is a message 6',
        user_id: user3.id,
        channel_id: channel3.id,
    })

end