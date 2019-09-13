export const fetchAllServers = () => (
    $.ajax({
        method: 'GET',
        url: '/api/servers'
    })
);

export const fetchServer = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/servers/${id}`
    })
);

export const createServer = (server) => {

        return $.ajax({
            method: 'POST',
            url: 'api/servers',
            data: {server}
        });
};

export const updateServer = (server) => {
    // server.channels = Object.keys(server.channels).map(key => server.channels[key]);

    return $.ajax({
        method: 'PATCH',
        url: `api/servers/${id}`,
        data: {server}
    });
};