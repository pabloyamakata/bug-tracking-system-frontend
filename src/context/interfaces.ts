export interface StateInterface {
    username: string;
    bugId: number;
    projectId: number;
}

export interface ContextProviderProps {
    children: React.ReactNode; 
}

export interface AppContextInterface {
    state: StateInterface;
    setBugId: (id: number) => void;
    setProjectId: (id: number) => void;
    setUsername: (username: string) => void;
}