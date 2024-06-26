import Image from "next/image";

import { AvatarProps } from "./avatar.types";
import { Status } from "../Status/Status";
import { defaultUserAvatar } from "../../helpers/defaultUserAvatar";

export function Avatar({ item, className, online, status = true, ...props }: AvatarProps) {
  return (
    <span>
      <Image
        className={`object-cover rounded-full ${className}`}
        width={64}
        height={64}
        src={defaultUserAvatar(item.id)}
        {...props}
      />
      {status && online && (
        <div className="flex justify-end items-end">
          <Status className="absolute" online={online} />
        </div>
      )}
    </span>
  );
}
