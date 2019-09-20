require 'faker'

ActiveRecord::Base.transaction do

    Message.destroy_all
    Channel.destroy_all
    Server.destroy_all
    User.destroy_all

    nairie = User.create!({
        username: 'Nairie',
        password: 'go_nairie_go',
    })

    user1 = User.create!({
        username: 'Guest',
        password: 'go_guest_go',
    })

    server1 = Server.create!({
        server_name: 'Server One',
        description: 'Server One Description',
        owner_id: nairie.id,
    })

    server2 = Server.create!({
        server_name: 'Server Two',
        description: 'Server Two Description',
        owner_id: nairie.id,
    })

    server3 = Server.create!({
        server_name: 'Server Three',
        description: 'Server Three Description',
        owner_id: nairie.id,
    })

    server4 = Server.create!({
        server_name: 'Server Four',
        description: 'Server Four Description',
        owner_id: nairie.id,
    })

    server5 = Server.create!({
        server_name: 'Server Five',
        description: 'Server Five Description',
        owner_id: nairie.id,
    })

    server6 = Server.create!({
        server_name: 'Server Six',
        description: 'Server Six Description',
        owner_id: nairie.id,
    })

    channel1 = Channel.create!({
        channel_name: 'Channel One',
        description: 'Channel One Description',
        owner_id: nairie.id,
        server_id: server1.id,
    })

    channel2 = Channel.create!({
        channel_name: 'Channel Two',
        description: 'Channel Two Description',
        owner_id: nairie.id,
        server_id: server1.id,
    })

    channel3 = Channel.create!({
        channel_name: 'Channel Three',
        description: 'Channel Three Description',
        owner_id: nairie.id,
        server_id: server1.id,
    })

    channel4 = Channel.create!({
        channel_name: 'Channel Four',
        description: 'Channel Four Description',
        owner_id: nairie.id,
        server_id: server2.id,
    })

    channel5 = Channel.create!({
        channel_name: 'Channel Five',
        description: 'Channel Five Description',
        owner_id: nairie.id,
        server_id: server2.id,
    })

    channel6 = Channel.create!({
        channel_name: 'Channel Six',
        description: 'Channel Six Description',
        owner_id: nairie.id,
        server_id: server3.id,
    })

    message1 = Message.create!({
        body: 'Thanks Alex, Andy, Annie, Jimmy, Stanton, Theo, and everyone else for all the help throughout the cohort, including this project. You guys are wonderful.',
        user_id: nairie.id,
        channel_id: channel1.id,
    })

    message2 = Message.create!({
        body: 'Aria is a live chat application. I made it because one day I want to write a chat AI that comforts people who are feeling lonely, and I wanted to give that chat AI a home.',
        user_id: nairie.id,
        channel_id: channel1.id,
    })

    message3 = Message.create!({
        body: "I'd like to give everyone the opportunity to have some fun with this app! To use, go to aria-fsp.herokuapp.com, click the 'Login' button on the top right, click on 'Need an account? Register', make an account, click S1, Channel One, and try sending a few messages!",
        user_id: nairie.id,
        channel_id: channel1.id,
    })

end