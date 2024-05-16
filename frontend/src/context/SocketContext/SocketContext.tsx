import { createContext } from "react";

import { SocketContextProps } from "./socketContext.types";

const SocketContext = createContext<SocketContextProps>({});

export { SocketContext };
