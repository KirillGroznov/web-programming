import EndStyles from "./End.module.css";
import React, { memo } from "react";

export const End = memo(() => {
    return (
        <div className={EndStyles.position}>
            <label className={EndStyles.end}>
                2021 © Все права и планета защищены
            </label>
        </div>
    );
});