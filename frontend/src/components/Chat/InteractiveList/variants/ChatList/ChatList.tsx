import React from "react";

import { InteractiveChatParams } from "../../interactiveList.types";
import { ChatItem } from "../../../UserItem/variants/ChatItem";
import { ScrollList } from "../../../../ScrollList/ScrollList";

export function ChatList({ chats }: Readonly<InteractiveChatParams>) {
  return (
    <ScrollList>
      {!chats || (chats && chats.size === 0) ? (
        <div className="h-full bg-dark-500 flex items-center justify-center">No chats</div>
      ) : (
        Array.from(chats.values()).map(chat => <ChatItem key={chat.id} chat={chat} />)
      )}
    </ScrollList>
  );
}
