import { StateInterface } from "./context";

interface ActionInterface {
    type: string;
    payload: number;
}

export const reducer = (state: StateInterface, action: ActionInterface): any => {
    switch(action.type) {
        case 'SET_PROJECT_ID':
            return { ...state, projectId: action.payload };
        case 'SET_BUG_ID':
            return { ...state, bugId: action.payload };
        default:
            return state;
    }
}