import { createContext } from "react";
import { AppContextInterface } from "./interfaces";

export const AppContext = createContext<AppContextInterface>({} as AppContextInterface);