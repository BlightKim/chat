"use client";

import {useRouter} from "next/navigation";
import { SocketContext } from "@/context/SocketContext/SocketContext";

import {PropsWithChildren, useEffect, useMemo, useState} from "react";

import {connectToSocket} from "@/api/socket";
import {useAppDispatch} from "@/lib/hooks";
import {MessageContextParams, SocketContextProps} from "@/context/SocketContext/socketContext.types";

export function SocketProvider({children}: Readonly<PropsWithChildren>) {
    const dispatch = useAppDispatch();
    const route = useRouter();
    const [webSocket, setWebSocket] = useState<WebSocket | null>(null);
    const [message, setMessage] = useState<MessageContextParams>();

    useEffect(() => {


        const newSocket = connectToSocket();

        newSocket.onclose = () => {
        };

        newSocket.onerror = () => {
            console.log("Error");
        };

        newSocket.onopen = event => {
            console.log("Open", event);
        };

        newSocket.onmessage = event => {
            setMessage(JSON.parse(event.data));
        };

        setWebSocket(newSocket);

        return () => {
            if (newSocket.readyState === WebSocket.OPEN) {
                newSocket.close();
            }
        };
    }, [dispatch, route]);

    const value = useMemo<SocketContextProps>(() => {
        return {
            webSocket,
            message,
        };
    }, [message, webSocket]);

    return <SocketContext.Provider value={value}>{children}</SocketContext.Provider>;
}