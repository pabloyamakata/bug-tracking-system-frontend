import { useReducer } from "react";
import { reducer } from "./reducer";
import { AppContext } from "./AppContext";
import { StateInterface, ContextProviderProps } from "./interfaces";

const INITIAL_STATE: StateInterface = {
    username: '',
    bugId: 0,
    projectId: 0
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    const setUsername = (username: string) => {
        dispatch({ type: 'SET_USERNAME', payload: username });
    };
    const setBugId = (id: number) => {
        dispatch({ type: 'SET_BUG_ID', payload: id });
    };
    const setProjectId = (id: number) => {
        dispatch({ type: 'SET_PROJECT_ID', payload: id });
    };
    return(
        <AppContext.Provider value={{
            state,
            setUsername,
            setBugId,
            setProjectId
        }}>
            { children }
        </AppContext.Provider>
    )
}