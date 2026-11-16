import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import { createContext, useContext, useState } from "react";
import "./App.css";
const AppContext = createContext();
function App() {
    const [theme, setTheme] = useState("dark");

    return (
        <AppContext value={theme}>
            <Form />
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Click</button>
        </AppContext>
    );
}
function Form() {
    const theme = useContext(AppContext);
    return (
        <div className={theme === "light" ? "panel-light" : "panel-dark"}>
            <div>Welcome to the form</div>
        </div>
    );
}
export default App;
