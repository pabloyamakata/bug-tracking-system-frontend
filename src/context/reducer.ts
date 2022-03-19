import { StateInterface } from './interfaces';

type ActionTypes = 
    | { type: 'SET_BUG_ID', payload: number }
    | { type: 'SET_PROJECT_ID', payload: number }
    | { type: 'SET_IS_LOADING', payload: boolean }

export const reducer = (state: StateInterface, action: ActionTypes) => {
    switch(action.type) {
        case 'SET_BUG_ID':
            return { ...state, bugId: action.payload }
        case 'SET_PROJECT_ID':
            return { ...state, projectId: action.payload }
        case 'SET_IS_LOADING':
            return { ...state, isLoading: action.payload }
        default:
            return state;
    }
}