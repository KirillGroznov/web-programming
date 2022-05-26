import React, { useContext } from "react";
import { DestroyHead } from "./DestroyHead";
import { End } from "../../End";
import { AsteroidsContext } from "../../App";
import { CardList } from "../../CardList";

export const Destroy = () => {
    document.title = "Уничтожение";

    const { state, dispatch } = useContext(AsteroidsContext);

    return (
        <>
            <DestroyHead />
            <CardList list={state.destroy} />
            <End />
        </>
    );
};