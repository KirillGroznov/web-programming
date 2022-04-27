import '../praktika9/Head.css';
import {Link} from 'react-router-dom';

export function Head () {
    return (
        <div id="position1">
            <label id="title">ARMAGGEDON V</label>
            <label id="description">Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</label>
            <div id="choice">
                <label id="asteroids">Астероиды</label>
                <Link to="/destroy" id="destruction">Уничтожение</Link>
            </div>
            <div id="rectangle"></div>
            <input id="check" type="checkbox"/>
            <label id="danger">Показать только опасные</label>
            <label id="distance">Расстояние <label id="km">в километрах</label>, <label id="moon">в дистанциях до луны</label></label>
        </div>
    );
} 