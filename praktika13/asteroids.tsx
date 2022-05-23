import { Link } from "react-router-dom";
import React, { useContext } from "react";
import HeadStyles from "../Head.module.css";
import EndStyles from "../End.module.css";
import { Card } from "../../Card/Card";
import { context } from "../../App";

export function Asteroids() {
    document.title = "Астероиды";

    const { state, dispatch } = useContext(context);

    function Show(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch({
            payload: { ...state, show: event.target.checked },
            type: "Show",
        });
    }

    function Km() {
        dispatch({
            payload: { ...state, units: 0 },
            type: "Units",
        });
    }

    function Moon() {
        dispatch({
            payload: { ...state, units: 1 },
            type: "Units",
        });
    }

    return (
        <>
            <div className={HeadStyles.position}>
                <label className={HeadStyles.title}>ARMAGGEDON V</label>
                <label className={HeadStyles.description}>
                    Сервис мониторинга и уничтожения астероидов, опасно подлетающих к
                    Земле.
                </label>
                <div className={HeadStyles.choice}>
                    <label className={HeadStyles.asteroids}>Астероиды</label>
                    <Link to="/destroy" className={HeadStyles.destruction}>
                        Уничтожение
                    </Link>
                </div>
                <div className={HeadStyles.rectangle} />
                <input className={HeadStyles.check} type="checkbox" onChange={Show} />
                <label className={HeadStyles.danger}>Показать только опасные</label>
                <label className={HeadStyles.dist}>
                    Расстояние
                    <button
                        className={state.units === 0 ? HeadStyles.km : HeadStyles.moon}
                        onClick={Km}
                    >
                        в километрах
                    </button>
                    ,
                    <button
                        className={state.units === 0 ? HeadStyles.moon : HeadStyles.km}
                        onClick={Moon}
                    >
                        в дистанциях до луны
                    </button>
                </label>
            </div>
            {!state.show
                ? state.arr.map((item: any) => (
                    <Card
                        name={item.name}
                        date={item.date}
                        distance={item.distance}
                        size={item.size}
                        grade={item.grade}
                    />
                ))
                : state.arr.map((item: any) => (
                    <>
                        {item.grade === "опасен" ? (
                            <Card
                                name={item.name}
                                date={item.date}
                                distance={item.distance}
                                size={item.size}
                                grade={item.grade}
                            />
                        ) : (
                            ""
                        )}
                    </>
                ))}
            <div className={EndStyles.position}>
                <label className={EndStyles.end}>
                    2021 © Все права и планета защищены
                </label>
            </div>
        </>
    );
}