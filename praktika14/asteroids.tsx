import React, { useContext } from "react";
import { AsteroidsContext } from "../../App";
import { End } from "../../End";
import { AsteroidsHead } from "./AsteroidsHead";
import { CardList } from "../../CardList";

export const Asteroids = () => {
    document.title = "Астероиды";

    const { state, dispatch } = useContext(AsteroidsContext);

    return (
        <>
            <AsteroidsHead />
            <CardList list={state.arr} />
            <End />
        </>
    );
};