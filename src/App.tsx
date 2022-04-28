import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useGetCountriesQuery } from "./generated/graphql";

function App() {
    const { data, loading, error } = useGetCountriesQuery();
    if (loading) {
        return <>Loading...</>;
    }
    if (error) {
        return <pre>{JSON.stringify(error, null, 4)}</pre>;
    }
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
            <pre>{JSON.stringify(data, null, 4)}</pre>
        </>
    );
}

export default App;
