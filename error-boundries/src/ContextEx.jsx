/* eslint-disable react/prop-types */
// import React from 'react'
import { createContext } from "react";
import { useContext, useState } from "react";

const UserContext = createContext(null);
const ThemeContext = createContext("dark");

function Foo({ user }) {
    return (
        <>
            <UserContext.Provider value={"joe"}>
                <h1>this is foo</h1>
                <Bar user={user} />
            </UserContext.Provider>
        </>
    );
}
function Bar({ user }) {
    return (
        <>
            <h2>this is Bar</h2>
            <Baz user={user} />
        </>
    );
}
function Baz() {
    const username = useContext(UserContext);
    const theme = useContext(ThemeContext);
    return (
        <h3 style={{background:theme==="light"?"white":"black", color:theme==="light"?"black":"white"}}>this is Baz, wazzup {username}</h3>
    );
}



export default function ContextEx() {
    const username = "Umang";
    const [theme, setTheme] = useState("light");
    return (
        <div>
            Parent app say Hello {username}
            <UserContext.Provider value={username}>
                <ThemeContext.Provider value={theme}>
                    <Foo user={username} />
                </ThemeContext.Provider>
            </UserContext.Provider>
            <button onClick={() => setTheme(prev => prev === "light" ? "dark" : "light")}>Toggle Theme</button>
        </div>
    );
}
