import AsteroidsStyles from "../Asteroids.module.css";
import { Link } from "react-router-dom";
import React, { memo } from "react";

export const AsteroidsHead = memo(() => {
    return (
        <div className={AsteroidsStyles.position}>
            <label className={AsteroidsStyles.title}>ARMAGGEDON V</label>
            <label className={AsteroidsStyles.description}>
                Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.
            </label>
            <div className={AsteroidsStyles.choice}>
                <label className={AsteroidsStyles.asteroids}>Астероиды</label>
                <Link to="/destroy" className={AsteroidsStyles.destruction}>
                    Уничтожение
                </Link>
            </div>
            <div className={AsteroidsStyles.rectangle} />
        </div>
    );
});