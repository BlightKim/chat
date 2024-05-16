import React from "react";

import { ContactParams } from "../../../api/http/contacts/contacts.types";
import { MainBoxStateEnum } from "../chat.types";
import { MainBoxProps } from "./mainBox.types";
import { ChatBox } from "./variants/ChatBox/ChatBox";
import { EmptyBox } from "./variants/EmptyBox/EmptyBox";
import { UserInfoBox } from "./variants/UserInfoBox/UserInfoBox";

export function MainBox({
  mainBoxVariant,
  contact,
  globalUser,
  onAddContactClick: handleAddContactClick,
  onRemoveContactClick: handleRemoveContactClick,
  onMessageButtonClick: handleMessageButtonClick,
}: Readonly<MainBoxProps>) {
  let variant = <EmptyBox />;
  if (mainBoxVariant === MainBoxStateEnum.USER_INFO && contact) {
    variant = (
      <UserInfoBox
        contact={contact}
        onAddContactClick={handleAddContactClick}
        onRemoveContactClick={handleRemoveContactClick}
        onMessageButtonClick={handleMessageButtonClick}
      />
    );
  }
  if (mainBoxVariant === MainBoxStateEnum.USER_INFO && globalUser) {
    const globalContact: ContactParams = {
      alias: undefined,
      addedAt: undefined,
      user: globalUser,
    };
    variant = (
      <UserInfoBox
        contact={globalContact}
        onAddContactClick={handleAddContactClick}
        onRemoveContactClick={handleRemoveContactClick}
        onMessageButtonClick={handleMessageButtonClick}
      />
    );
  } else if (contact && mainBoxVariant === MainBoxStateEnum.CHAT) {
    variant = <ChatBox contact={contact} />;
  }
  return <div className="flex w-full h-screen bg-dark-550 rounded-r-2xl">{variant}</div>;
}
