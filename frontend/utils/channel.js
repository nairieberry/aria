export const fetchAllChannels = () => (
    $.ajax({
        method: 'GET',
        url: '/api/channels',
    })
);

export const fetchChannel = () => (
    $.ajax({
        method: 'GET',
        url: `/api/channels/${id}`,
    })
);

export const createChannel = (channel) => (
    $.ajax({
        method: 'POST',
        url: 'api/channels',
        data: {channel}
    })
);

export const deleteChannel = () => (
    $.ajax({
        url: '/api/channels',
        method: 'DELETE',
    })
);