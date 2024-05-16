import { ListStateEnum } from "../chat.types";
import { CustomButtonVariant } from "../../CustomButton/customButton.types";
import { IconName } from "../../Icon/Icon";

export type SidebarButtons = {
  onClick?: () => void;
  icon: IconName;
};

export type SidebarButtonName =
  | ListStateEnum.CHATS
  | ListStateEnum.ADD_CHAT
  | ListStateEnum.FIND_CONTACTS
  | ListStateEnum.CONTACTS
  | ListStateEnum.SETTING;

export type SidebarItem = {
  iconSize: number;
  variant: CustomButtonVariant;
  buttons: Record<SidebarButtonName, SidebarButtons>;
};
