import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useReducer } from "react";
import { Asteroids } from "./pages/asteroids";
import { Destroy } from "./pages/destroy";
import { AsteroidsArray, Url } from "./pages/API/API";

export const context = React.createContext(null);

export function App() {
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
        fetch(Url())
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
                </Routes>
            </BrowserRouter>
        </context.Provider>
    );
}

export default App;