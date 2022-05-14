import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useReducer } from "react";
import { Asteroids } from "./pages/Asteroids/asteroids";
import { Destroy } from "./pages/Destroy/destroy";
import { Login } from "./pages/Login/login";
import { AsteroidsArray, Url } from "./pages/API/API";

export const context = React.createContext(null);

export function App() {
    const APIkey = !window.localStorage.getItem("API-key")
        ? "DEMO_KEY"
        : window.localStorage.getItem("API-key");

    const reducer = (state, action) => {
        switch (action.type) {
            case "Arr":
                return {
                    ...state,
                    arr: action.payload,
                };
            case "Destroy":
                return {
                    ...state,
                    destroy: [...state.destroy, action.payload],
                };
            case "Show":
                return {
                    ...state,
                    show: action.payload,
                };
            case "Units":
                return {
                    ...state,
                    units: action.payload,
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
        fetch(Url(APIkey))
            .then((response) => response.json())
            .then((data) => {
                dispatch({ payload: AsteroidsArray(data), type: "Arr" });
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <context.Provider value={{ state, dispatch }}>
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