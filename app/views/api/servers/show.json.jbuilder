json.set! @server.id do
    json.partial! 'api/servers/server', server: @server
end