import { Link } from "react-router-dom";
import { useContext } from "react";
import { context } from "../App";
import HeadStyles from "./Head.module.css";
import { Card } from "../Card/Card";
import EndStyles from "./End.module.css";

export function Destroy() {
    document.title = "Уничтожение";

    const { state, dispatch } = useContext(context);

    function Show(event) {
        dispatch({
            payload: !!event.target.checked,
            type: "Show",
        });
    }

    function Km() {
        dispatch({
            payload: 0,
            type: "Units",
        });
    }

    function Moon() {
        dispatch({
            payload: 1,
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
                    <label className={HeadStyles.asteroids}>Уничтожение</label>
                    <Link to="/" className={HeadStyles.destruction}>
                        Астероиды
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
            {state.show === false
                ? state.destroy.map((item) => (
                    <Card
                        name={item.name}
                        date={item.date}
                        distance={item.distance}
                        size={item.size}
                        grade={item.grade}
                        units={state.units}
                    />
                ))
                : state.destroy.map((item) => (
                    <>
                        {item.grade === "опасен" ? (
                            <Card
                                name={item.name}
                                date={item.date}
                                distance={item.distance}
                                size={item.size}
                                grade={item.grade}
                                units={state.units}
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