import { useContext } from "react";
import { ThemeContext } from "./TemeContext";

export const Box = () => {
    // when we want to use context variables, we import and use useContext.
    const theme = useContext(ThemeContext);
    return (
        <div style={{backgroundColor: theme.primary.main}}> Theme Context </div>
    )
}