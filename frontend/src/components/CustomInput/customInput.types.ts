import { DetailedHTMLProps, InputHTMLAttributes } from "react";

import { IconName } from "../Icon/Icon";

export type CustomInputProps = {
  icon?: IconName;
  label?: string;
  error?: string | false;
  innerContainerClassName?: string;
  containerClassName?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
