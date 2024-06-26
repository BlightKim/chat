import React, { PropsWithChildren } from "react";

import { ContainerProps } from "./container.types";
import { Header } from "../Header/Header";

export function Container({ children, className, showHeader = true }: Readonly<PropsWithChildren<ContainerProps>>) {
  return (
    <>
      {showHeader ? <Header withoutEffects logoLabel="LinkWave" /> : null}
      <div className={`flex flex-col items-center justify-center p-24 h-screen ${className}`}>{children}</div>
    </>
  );
}
