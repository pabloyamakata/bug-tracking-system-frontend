import { createContext } from 'react';

interface StateInterface {
    isPasswordVisible: boolean;
}

interface ContextInterface {
    state: StateInterface;
    setState: React.Dispatch<React.SetStateAction<{
      isPasswordVisible: boolean;
}>>}

const initialContext = {
    state: {
        isPasswordVisible: false
    },
    setState: ({}) => {}
}

export const AppContext = createContext<ContextInterface>(initialContext);
