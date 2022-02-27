import { createContext } from "react";

export interface StateInterface {
    projectId: number;
    bugId: number;
}

interface InitialContextInterface {
    state: StateInterface;
    dispatch: React.Dispatch<any>;
}

const initialContext = {
    state: {
        projectId: 0,
        bugId: 0
    },
    dispatch: () => {}  
}

export const AppContext = createContext<InitialContextInterface>(initialContext);