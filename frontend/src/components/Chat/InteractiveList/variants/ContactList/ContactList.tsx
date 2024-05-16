import React from "react";

import { InteractiveContactParams } from "../../interactiveList.types";
import { ContactItem } from "../../../UserItem/variants/ContactItem";
import { ScrollList } from "../../../../ScrollList/ScrollList";

export function ContactList({
  contacts,
  onContactClick: handleContactClick,
  currentContact,
}: Readonly<InteractiveContactParams>) {
  if (!contacts || contacts.size === 0) {
    return <ScrollList className="justify-center items-center">No contacts</ScrollList>;
  }

  return (
    <ScrollList>
      {Array.from(contacts.values()).map(contact => (
        <ContactItem
          contact={contact}
          onClick={handleContactClick}
          key={contact.user.id}
          currentContact={currentContact}
        />
      ))}
    </ScrollList>
  );
}
