import './Asteroid2.css';
import dino from '../../PNG/Dino.png'
import middleAsteroid from "../../PNG/MiddleAsteroid.png";

export function Asteroid2 () {
    return (
        <div className="position">
            <div id="asteroid2">
                <img className="dino" src={dino} alt="Динозавр"/>
                <img id="asteroid2img" src={middleAsteroid} alt="Средний астероид"/>
                <label className="name">2021 ER</label>
                <label className="description">
                    <label className="date">Дата.................................2 ноября 2021</label>
                    <label className="distance">Расстояние........................9 331 775 км</label>
                    <label className="size">Размер...........................................300 м</label>
                </label>
                <label id="rate">Оценка:</label>
                <label id="rate2">не опасен</label>
                <div className="button">
                    <button className="destroy">На уничтожение</button>
                </div>
            </div>
        </div>
    );
} 