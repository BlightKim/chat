import React, { forwardRef, Ref } from "react";

import { BUTTON_VARIANT_STYLES } from "./customButton.config";
import { CustomButtonProps } from "./customButton.types";
import { Icon } from "../Icon/Icon";

export const CustomButton = forwardRef(
  ({ className, children, variant, icon, iconSize, ...props }: CustomButtonProps, ref: Ref<HTMLButtonElement>) => {
    let style: string;
    switch (variant) {
      case "transparent":
        style = BUTTON_VARIANT_STYLES.transparent;
        break;
      case "flattened":
        style = BUTTON_VARIANT_STYLES.flattened;
        break;
      case "square":
        style = BUTTON_VARIANT_STYLES.square;
        break;
      case "outline":
        style = BUTTON_VARIANT_STYLES.outline;
        break;
      default:
        style = BUTTON_VARIANT_STYLES.primary;
        break;
    }

    return (
      <button
        type="button"
        className={`outline-none flex gap-2 justify-center items-center text-blue-100 ${style} ${className}`}
        ref={ref}
        {...props}
      >
        {icon ? <Icon name={icon} iconSize={iconSize} /> : null}
        {children ?? null}
      </button>
    );
  }
);
