import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useReducer } from "react";
import { Asteroids } from "./pages/Asteroids/asteroids";
import { Destroy } from "./pages/Destroy/destroy";
import { Login } from "./pages/Login/login";
import { AsteroidsArray, Url } from "./pages/API/API";
import { Asteroid } from "./Card/Card";

type AsteroidsState = {
    arr: Asteroid[];
    destroy: Asteroid[];
    show: boolean;
    units: number;
};

type AsteroidsAction = {
    type: string;
    payload: AsteroidsState;
};

const InitAsteroidsState: AsteroidsState = {
    arr: [],
    destroy: [],
    show: false,
    units: 0,
};

export const context = React.createContext({
    state: InitAsteroidsState,
    dispatch: (type: AsteroidsAction) => {},
});

export function App() {
    const reducer = (
        state: AsteroidsState,
        action: AsteroidsAction
    ): AsteroidsState => {
        switch (action.type) {
            case "Arr":
                return {
                    ...state,
                    arr: action.payload.arr,
                };
            case "Destroy":
                return {
                    ...state,
                    destroy: [...state.destroy, action.payload.destroy[0]],
                };
            case "Show":
                return {
                    ...state,
                    show: action.payload.show,
                };
            case "Units":
                return {
                    ...state,
                    units: action.payload.units,
                };
            default:
                throw new Error();
        }
    };

    const [state, dispatch] = useReducer(reducer, {
        arr: [],
        destroy: [],
        show: false,
        units: 0,
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
        <context.Provider value={{ state: state, dispatch: dispatch }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Asteroids />} />
                    <Route path="/destroy" element={<Destroy />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </context.Provider>
    );
}

export default App;