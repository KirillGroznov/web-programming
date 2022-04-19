import './Head.css';
import './End.css';
import {Card} from "../Card/Card";
import {useState} from 'react';
import {Link} from "react-router-dom";

export function Asteroids () {

    function AsteroidsArray () {
        let arr = [];
        let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let month=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];
        let name,date,distance,size,grade;
        for (let i=0;i<5;i++) {
            name="202"+(Math.floor(Math.random() * 2)+1)+' '+arr_EN[Math.floor(Math.random() * 26)]+arr_EN[Math.floor(Math.random() * 26)];
            date=(Math.floor(Math.random() * 29)+1)+' '+month[Math.floor(Math.random() * 12)]+" 202"+(Math.floor(Math.random() * 2)+1);
            distance=(Math.floor(Math.random() * 10)+1)+' '+(Math.floor(Math.random() * 700)+300)+' '+(Math.floor(Math.random() * 700)+300);
            size=(Math.floor(Math.random() * 1000)+1);
            if (distance.replace(/\s/g, '')<3000000 && size>500) grade="опасен";
            else grade="не опасен";
            arr.push ({
                name: name,
                date: date,
                distance: distance,
                size: size,
                grade: grade
            });
        }
        return arr;
    }

    const [asteroids,setAsteroids]=useState({
        arr: AsteroidsArray(),
        show: false,
        units: 0
    });

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
            <div id="position1">
                <label id="title">ARMAGGEDON V</label>
                <label id="description">Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</label>
                <div id="choice">
                    <label id="asteroids">Астероиды</label>
                    <Link to="/destroy" id="destruction">Уничтожение</Link>
                </div>
                <div id="rectangle"></div>
                <input id="check" type="checkbox" onChange={Show}/>
                <label id="danger">Показать только опасные</label>
                <label id="dist">Расстояние <button className={asteroids.units===0?"km":"moon"} onClick={Km}>в километрах</button>, <button className={asteroids.units===0?"moon":"km"} onClick={Moon}>в дистанциях до луны</button></label>
            </div>
            {asteroids.show === false ?
                (asteroids.arr.map((item) => <Card name={item.name} date={item.date} distance={item.distance} size={item.size} grade={item.grade} units={asteroids.units}/>))
                :
                (asteroids.arr.map((item) => <>{item.grade==="опасен"?<Card name={item.name} date={item.date} distance={item.distance} size={item.size} grade={item.grade} units={asteroids.units}/>:""}</>))
            }
            <div id="position2">
                <label id="end">2021 © Все права и планета защищены</label>
            </div>
        </>
    );
} 