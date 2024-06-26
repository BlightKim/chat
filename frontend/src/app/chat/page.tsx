import React from "react";

import { Chat } from "../../components/Chat/Chat";
import { Container } from "../../components/Container/Container";
import { SocketProvider } from "../../context/SocketContext/SocketProvider/SocketProvider";

export default function ChatPage() {
  return (
    <Container className="p-0" showHeader={false}>
      <SocketProvider>
        <Chat />
      </SocketProvider>
    </Container>
  );
}
