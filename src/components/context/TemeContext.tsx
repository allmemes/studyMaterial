import { createContext } from "react";
import { style } from "./theme";

// like the example of Oscar.tsx, the passed in prop is another element.
type ThemeProp = {
    children: React.ReactNode
}

// createContext generates a "global" scope.
// note: we createContext when we want to create a global scope, and useContext when we 
// want to use the globalled variable within the scope. 
// we create context on the style, and then we can use this contexted style in box.tsx after using useContext.
// Different from simply import and export: object within createContext can CHANGE and RERENDER, which exporting cannot achieve.
export const ThemeContext = createContext(style);

export const ThemeContextProvider = (props: ThemeProp) => {
    return <ThemeContext.Provider value={style}>
        {/* All the element within the .provider will have access to the value attribute -> a "global state" of all children in the provider */}
        {props.children}
        {/* can access the variable in value */}
        <div> Style: {style.primary.main}</div>
    </ThemeContext.Provider>
}