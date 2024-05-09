"use client"

import {PropsWithChildren, useEffect} from "react";
import {connectToSocket} from "@/api/socket";

export function SocketProvider({children}: Readonly<PropsWithChildren>) {

    useEffect(() => {
        const newSocket = connectToSocket();


        newSocket.onerror = () => {
            console.log("Error");
        };

        newSocket.onopen = event => {
            console.log("Open", event);
        };

        newSocket.onmessage = event => {
        };


    })
}