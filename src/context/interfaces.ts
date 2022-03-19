export interface StateInterface {
    bugId: number;
    projectId: number;
    isLoading: boolean;
}

export interface ContextProviderProps {
    children: React.ReactNode; 
}

export interface AppContextInterface {
    state: StateInterface;
    setBugId: (id: number) => void;
    setProjectId: (id: number) => void;
    setIsLoading: (boolean: boolean) => void;
}