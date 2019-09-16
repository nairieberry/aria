// index create update delete

export const fetchAllMessages = () => (
    $.ajax({
        method: 'GET',
        url: '/api/messages'
    })
);

export const createMessage = (message) => (
    $.ajax({
        method: 'POST',
        url: 'api/messages',
        data: {message}
    })
);

export const updateMessage = (message) => (
    $.ajax({
        method: 'PATCH',
        url: `api/messages/${id}`,
        data: {message}
    })
);

export const deleteMessage = () => (
    $.ajax({
        url: '/api/messages',
        method: 'DELETE',
    })
);