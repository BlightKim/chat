"use client";

import { useTheme } from "next-themes";

import { SystemToastContainer } from "../SystemToastContainer/SystemToastContainer";

export function ToastManager() {
  const { resolvedTheme } = useTheme();
  return <SystemToastContainer theme={resolvedTheme ?? "dark"} />;
}
