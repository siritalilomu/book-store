import React, { createContext, useReducer } from 'react'
import { statement } from '@babel/template';

interface IState {
    books: [],
    favorites: []
}

interface IAction {
    type: string
    payload: any
}

const initialState: IState = {
    books: [],
    favorites: []
}

export const Store = createContext<IState | any>(initialState)

const reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, books: action.payload }
        default:
            return state
    }
}

export function StoreProvider(props: any): JSX.Element {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <Store.Provider value={{state, dispatch}}>
            { props.children }
        </Store.Provider>
    )
}
