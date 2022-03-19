import { useReducer } from "react";
import { reducer } from "./reducer";
import { AppContext } from "./AppContext";
import { StateInterface, ContextProviderProps } from "./interfaces";

const INITIAL_STATE: StateInterface = {
    bugId: 0,
    projectId: 0,
    isLoading: false
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    const setBugId = (id: number) => {
        dispatch({ type: 'SET_BUG_ID', payload: id });
    };
    const setProjectId = (id: number) => {
        dispatch({ type: 'SET_PROJECT_ID', payload: id });
    };
    const setIsLoading = (boolean: boolean) => {
        dispatch({ type: 'SET_IS_LOADING', payload: boolean });
    };
    return(
        <AppContext.Provider value={{
            state,
            setBugId,
            setProjectId,
            setIsLoading
        }}>
            { children }
        </AppContext.Provider>
    )
}