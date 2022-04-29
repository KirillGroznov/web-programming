import styles from './Card.module.css';
import dino from "../assets/dino.png";
import asteroid1 from "../assets/asteroid1.png";
import asteroid2 from "../assets/asteroid2.png";
import asteroid3 from "../assets/asteroid3.png";

export function Card (props) {
    return (
        <div className={styles.position}>
            <div className={props.grade==="не опасен"?styles.cardGreen:styles.cardRed}>
                <img className={styles.dino} src={dino} alt="Динозавр"/>
                {props.size<300?
                    <img className={styles.asteroid1} src={asteroid1} alt="Маленький астероид"/>
                    :props.size<600?
                        <img className={styles.asteroid2} src={asteroid2} alt="Средний астероид"/>
                        :
                        <img className={styles.asteroid3} src={asteroid3} alt="Большой астероид"/>
                }
                <label className={styles.name}>{props.name}</label>
                <label className={styles.description}>
                    <label className={styles.date}>Дата..........................{props.date}</label>
                    <label className={styles.size}>Размер...................................{props.size} м</label>
                    {props.units === 0 ?
                        <label className={styles.distance}>Расстояние.................{props.distance} км</label>
                        :
                        <label className={styles.distance}>Расстояние.................{(props.distance.replace(/\s/g, '')/384400).toFixed(2)} лд</label>
                    }
                </label>
                <label className={styles.rate11}>Оценка:</label>
                <label className={props.grade==="не опасен"?styles.rate1Green:styles.rate1Red}>{props.grade}</label>
                <div className={styles.button}>
                    <button className={styles.destroy}>На уничтожение</button>
                </div>
            </div>
        </div>
    );
} 