# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do

    Message.destroy_all
    Channel.destroy_all
    Server.destroy_all
    User.destroy_all

    user = User.create!({
        username: 'user',
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
        owner_id: user.id,
    })

    server3 = Server.create!({
        server_name: 'server3',
        description: 'this is a server 3',
        owner_id: user.id,
    })

    server4 = Server.create!({
        server_name: 'server4',
        description: 'this is a server 4',
        owner_id: user.id,
    })

    server5 = Server.create!({
        server_name: 'server5',
        description: 'this is a server 5',
        owner_id: user.id,
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
        owner_id: user.id,
        server_id: server.id,
    })

    channel3 = Channel.create!({
        channel_name: 'channel3',
        description: 'this is a channel 3',
        owner_id: user.id,
        server_id: server.id,
    })

    channel4 = Channel.create!({
        channel_name: 'channel4',
        description: 'this is a channel 4',
        owner_id: user.id,
        server_id: server.id,
    })

    channel5 = Channel.create!({
        channel_name: 'channel5',
        description: 'this is a channel 5',
        owner_id: user.id,
        server_id: server.id,
    })

    Message.create!({
        body: 'this is a message',
        user_id: user.id,
        channel_id: channel.id,
    })

end