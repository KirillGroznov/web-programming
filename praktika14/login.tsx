import React from "react";
import { LoginHead } from "./LoginHead/LoginHead";
import { LoginForm } from "./LoginForm/LoginForm";

export const Login = () => {
    document.title = "Логин";

    return (
        <>
            <LoginHead />
            <LoginForm />
        </>
    );
};