import React, { memo } from "react";
import DestroyStyles from "../Destroy.module.css";
import { Link } from "react-router-dom";

export const DestroyHead = memo(() => {
    return (
        <div className={DestroyStyles.position}>
            <label className={DestroyStyles.title}>ARMAGGEDON V</label>
            <label className={DestroyStyles.description}>
                Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.
            </label>
            <div className={DestroyStyles.choice}>
                <label className={DestroyStyles.asteroids}>Уничтожение</label>
                <Link to="/" className={DestroyStyles.destruction}>
                    Астероиды
                </Link>
            </div>
            <div className={DestroyStyles.rectangle} />
        </div>
    );
});