import { format } from "date-fns";

import { DateFormat } from "./formatDate.types";

export const formatDate = (date: number, dateFormat: DateFormat): string => {
  return format(date, dateFormat);
};
