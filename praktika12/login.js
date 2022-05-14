import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LoginStyles from "./login.module.css";
import { context } from "../../App";
import { Url } from "../API/API";
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

    function changeName(event) {
        setName(event.target.value);
    }

    function changeKey(event) {
        setKey({ API: event.target.value, valid: false });
    }

    function changeSave(event) {
        setSaveLocalStorage(event.target.checked);
    }

    function Submit() {
        fetch(Url(key.API))
            .then((response) => {
                if (!response.ok) throw new Error(response.status);
                else return response.json();
            })
            .then((data) => {
                dispatch({ payload: AsteroidsArray(data), type: "Arr" });
                setKey({ ...key, valid: true });
                if (saveLocalStorage) {
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
                {key.valid === true ? name : "DEMO MODE"}
            </label>
            <div className={LoginStyles.form}>
                <input
                    className={LoginStyles.text}
                    type="text"
                    value={name}
                    onChange={changeName}
                    placeholder="Имя"
                />
                <input
                    className={LoginStyles.text}
                    type="text"
                    value={key.API}
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