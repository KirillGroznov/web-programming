import HeadStyles from './Head.module.css';
import EndStyles from './End.module.css';
import {Card} from "../Card/Card";
import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {Url,AsteroidsArray} from "./API/API";

export function Asteroids () {

    document.title=`Астероиды`;

    const [asteroids,setAsteroids]=useState({
        arr: [],
        show: false,
        units: 0
    });

    useEffect(() => {
        fetch(Url())
            .then((response) => response.json())
            .then((data) => {setAsteroids({...asteroids,arr: AsteroidsArray(data)})})
            .catch((error)=>console.log(error))
    },[]);

    function Show (event) {
        setAsteroids({
            ...asteroids,
            show: event.target.checked
        })
    }

    function Km (event) {
        setAsteroids({
            ...asteroids,
            units: 0
        });
    }

    function Moon (event) {
        setAsteroids({
            ...asteroids,
            units: 1
        });
    }

    return (
        <>
            <div className={HeadStyles.position}>
                <label className={HeadStyles.title}>ARMAGGEDON V</label>
                <label className={HeadStyles.description}>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</label>
                <div className={HeadStyles.choice}>
                    <label className={HeadStyles.asteroids}>Астероиды</label>
                    <Link to="/destroy" className={HeadStyles.destruction}>Уничтожение</Link>
                </div>
                <div className={HeadStyles.rectangle}></div>
                <input className={HeadStyles.check} type="checkbox" onChange={Show}/>
                <label className={HeadStyles.danger}>Показать только опасные</label>
                <label className={HeadStyles.dist}>Расстояние <button className={asteroids.units===0?HeadStyles.km:HeadStyles.moon} onClick={Km}>в километрах</button>, <button className={asteroids.units===0?HeadStyles.moon:HeadStyles.km} onClick={Moon}>в дистанциях до луны</button></label>
            </div>
            {asteroids.show === false ?
                (asteroids.arr.map((item) => <Card name={item.name} date={item.date} distance={item.distance} size={item.size} grade={item.grade} units={asteroids.units}/>))
                :
                (asteroids.arr.map((item) => <>{item.grade==="опасен"?<Card name={item.name} date={item.date} distance={item.distance} size={item.size} grade={item.grade} units={asteroids.units}/>:""}</>))
            }
            <div className={EndStyles.position}>
                <label className={EndStyles.end}>2021 © Все права и планета защищены</label>
            </div>
        </>
    );
} 