import { createContext, useReducer } from "react";


export const ThemeContext = createContext();

const INITIAL_STATE = {darkMode: false}; /* at the beginnig the darkMode is off */

/* to change the state we should use reducers */
const themeReducer = (state, action) => {
    switch(action.type){
        case "TOGGLE":
            return {darkMode: !state.darkMode}; /* it means darkMode isn't in darkMode now */
        default:
            return state;
    }
}

export const ThemeProvider = (props) =>{
    const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

    return (
        <ThemeContext.Provider value={{state, dispatch}}>{props.children}</ThemeContext.Provider>
       );
}