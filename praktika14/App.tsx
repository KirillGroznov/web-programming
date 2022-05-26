import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useReducer } from "react";
import { Asteroids } from "./Pages/Asteroids/Asteroids";
import { Destroy } from "./Pages/Destroy/Destroy";
import { Login } from "./Pages/Login/Login";
import { AsteroidsArray, Url } from "./Tools/API/API";
import {
    AsteroidsAction,
    AsteroidsState,
    AsteroidsReducer,
    PageState,
    PageAction,
} from "./Reducers/Reducers";

export const InitAsteroidsState: AsteroidsState = {
    arr: [],
    destroy: [],
};

export const InitPageState: PageState = {
    show: false,
    units: 0,
};

export const AsteroidsContext = React.createContext({
    state: InitAsteroidsState,
    dispatch: (type: AsteroidsAction) => {},
});

export const PageContext = React.createContext({
    state: InitPageState,
    dispatch: (type: PageAction) => {},
});

export function App() {
    const [state, dispatch] = useReducer(AsteroidsReducer, {
        arr: [],
        destroy: [],
    });

    useEffect(() => {
        const APIkey = !window.localStorage.getItem("API-key")
            ? "DEMO_KEY"
            : window.localStorage.getItem("API-key");
        if (APIkey !== null)
            fetch(Url(APIkey))
                .then((response) => response.json())
                .then((data) => {
                    dispatch({
                        payload: { ...state, arr: AsteroidsArray(data) },
                        type: "Arr",
                    });
                })
                .catch((error) => console.log(error));
    }, []);

    return (
        <AsteroidsContext.Provider value={{ state: state, dispatch: dispatch }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Asteroids />} />
                    <Route path="/destroy" element={<Destroy />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </AsteroidsContext.Provider>
    );
}

export default App;