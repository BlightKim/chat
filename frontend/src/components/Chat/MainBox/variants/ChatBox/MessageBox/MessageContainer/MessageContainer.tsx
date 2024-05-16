import "./messageContainer.styles.css";

import React from "react";

import { MessageParams } from "../../../../../../../api/http/contacts/contacts.types";
import { Message } from "../Message/Message";
import { ScrollList } from "../../../../../../ScrollList/ScrollList";

export interface MessageContainerProps {
  messages: MessageParams[];
}

export function MessageContainer({ messages }: Readonly<MessageContainerProps>) {
  return (
    <ScrollList className="bg-transparent flex-col-reverse w-full relative pb-36 z-20 message-container__scrollbar-height">
      {[...messages].slice(1, 15).map((message, index) => (
        <Message key={message.id} message={message} previousMessage={messages[index - 1]} />
      ))}
    </ScrollList>
  );
}
