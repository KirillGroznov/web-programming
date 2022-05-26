import LoginStyles from "../Login.module.css";
import { Link } from "react-router-dom";
import React, { memo } from "react";

export const LoginHead = memo(() => {
    return (
        <>
            <div className={LoginStyles.position}>
                <label className={LoginStyles.title}>ARMAGGEDON V</label>
                <label className={LoginStyles.description}>
                    Сервис мониторинга и уничтожения астероидов, опасно подлетающих к
                    Земле.
                </label>
                <div className={LoginStyles.choice}>
                    <Link to="/destroy" className={LoginStyles.destruction}>
                        Уничтожение
                    </Link>
                    <Link to="/" className={LoginStyles.destruction}>
                        Астероиды
                    </Link>
                </div>
                <div className={LoginStyles.rectangle} />
            </div>
        </>
    );
});