const socketUrl = process.env.NEXT_PUBLIC_WEB_SOCKET_URL;

export const connectToSocket = () => {
    const socket = new WebSocket(`${socketUrl}`);

    socket.onopen = () => {
        console.log("Connected to socket");
    };

    return socket;
}
