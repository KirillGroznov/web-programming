import './Card.css';
import dino from "../assets/dino.png";
import asteroid1 from "../assets/asteroid1.png";
import asteroid2 from "../assets/asteroid2.png";
import asteroid3 from "../assets/asteroid3.png";

export function Card (props) {
    return (
        <div className="position">
            <div className={props.grade==="не опасен"?"cardGreen":"cardRed"}>
                <img className="dino" src={dino} alt="Динозавр"/>
                {props.size<300?
                    <img id="asteroid1" src={asteroid1} alt="Маленький астероид"/>
                    :props.size<600?
                        <img id="asteroid2" src={asteroid2} alt="Средний астероид"/>
                        :
                        <img id="asteroid3" src={asteroid3} alt="Большой астероид"/>
                }
                <label className="name">{props.name}</label>
                <label className="description">
                    <label className="date">Дата..........................{props.date}</label>
                    <label className="size">Размер...................................{props.size} м</label>
                    {props.units === 0 ?
                        <label className="distance">Расстояние.................{props.distance} км</label>
                        :
                        <label className="distance">Расстояние.................{(props.distance.replace(/\s/g, '')/384000).toFixed(2)} лд</label>
                    }
                </label>
                <label id="rate11">Оценка:</label>
                <label className={props.grade==="не опасен"?"rate1Green":"rate1Red"}>{props.grade}</label>
                <div className="button">
                    <button className="destroy">На уничтожение</button>
                </div>
            </div>
        </div>
    );
} 