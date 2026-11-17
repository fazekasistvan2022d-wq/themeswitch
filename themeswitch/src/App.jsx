import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import { createContext, useContext, useState, useDebugValue, useId } from "react";
import "./App.css";
const AppContext = createContext("dark-theme");
function App() {
    const [theme, setTheme] = useState("dark");

    return (
        <AppContext value={{ themechanger: "dark-theme" }}>
            <Form />
            <button onClick={handleClick}>Change Theme</button>
        </AppContext>
    );
}
function Form() {
    const appContext = useContext(AppContext);
    debuggerHook();
    const id = useId();
    const id2 = useId();
    return (
        <div id={id} className={appContext.themechanger === "dark-theme" ? "dark-theme" : "light-theme"}>
            {id}
            {id2}
        </div>
    );
}
function handleClick() {
    document.body.classList.toggle("dark-theme");
}
function debuggerHook() {
    const appContext = useContext(AppContext);
    useDebugValue(appContext === "dark-theme" ? "Dark theme" : "Light theme");
}
export default App;
