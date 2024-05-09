const socketUrl = process.env.NEXT_PUBLIC_WEB_SOCKET_URL;

export const connectToSocket = (token: string) => {
    const socket = new WebSocket(`${socketUrl}`);

    socket.onopen = () => {
        console.log("Connected to socket");
    };

    return socket;
}