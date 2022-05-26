import { Asteroid } from "../Card/Card";

export type AsteroidsState = {
    arr: Asteroid[];
    destroy: Asteroid[];
};

export type AsteroidsAction = {
    type: string;
    payload: AsteroidsState;
};

export const AsteroidsReducer = (
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
        default:
            throw new Error();
    }
};

export type PageState = {
    show: boolean;
    units: number;
};

export type PageAction = {
    type: string;
    payload: PageState;
};

export const PageReducer = (
    state: PageState,
    action: PageAction
): PageState => {
    switch (action.type) {
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