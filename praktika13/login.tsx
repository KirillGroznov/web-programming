import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LoginStyles from "./login.module.css";
import { context } from "../../App";
import { AsteroidsArray, Url } from "../API/API";
import HeadStyles from "../Head.module.css";

export function Login() {
    document.title = "Логин";

    const { state, dispatch } = useContext(context);
    const [name, setName] = useState(
        !window.localStorage.getItem("name")
            ? ""
            : window.localStorage.getItem("name")
    );
    const [key, setKey] = useState({
        API: !window.localStorage.getItem("API-key")
            ? ""
            : window.localStorage.getItem("API-key"),
        valid: !!window.localStorage.getItem("API-key"),
    });
    const [saveLocalStorage, setSaveLocalStorage] = useState(false);

    function changeName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
        setKey({ API: event.target.value, valid: false });
    }

    function changeSave(event: React.ChangeEvent<HTMLInputElement>) {
        setSaveLocalStorage(event.target.checked);
    }

    function Submit() {
        if (key.API !== null)
            fetch(Url(key.API))
                .then((response: any) => {
                    if (!response.ok) throw new Error(response.status);
                    else return response.json();
                })
                .then((data) => {
                    dispatch({
                        payload: { ...state, arr: AsteroidsArray(data) },
                        type: "Arr",
                    });
                    setKey({ ...key, valid: true });
                    if (saveLocalStorage && name !== null && key.API !== null) {
                        window.localStorage.setItem("name", name);
                        window.localStorage.setItem("API-key", key.API);
                    }
                })
                .catch((error) => {
                    alert("Введите действительный API-ключ");
                    console.log(error);
                });
    }

    return (
        <>
            <div className={HeadStyles.choice}>
                <Link to="/destroy" className={HeadStyles.destruction}>
                    Уничтожение
                </Link>
                <Link to="/" className={HeadStyles.destruction}>
                    Астероиды
                </Link>
            </div>
            <label className={LoginStyles.name}>
                {key.valid ? name : "DEMO MODE"}
            </label>
            <div className={LoginStyles.form}>
                <input
                    className={LoginStyles.text}
                    type="text"
                    value={name !== null ? name : ""}
                    onChange={changeName}
                    placeholder="Имя"
                />
                <input
                    className={LoginStyles.text}
                    type="text"
                    value={key.API !== null ? key.API : ""}
                    onChange={changeKey}
                    placeholder="API-ключ"
                />
                <div>
                    <input
                        className={LoginStyles.checkbox}
                        type="checkbox"
                        onChange={changeSave}
                    />
                    <label>Сохранить данные для их использования в дальнейшем</label>
                </div>
                <button className={LoginStyles.button} onClick={Submit}>
                    Сохранить
                </button>
            </div>
        </>
    );
}