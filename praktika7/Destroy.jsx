import {Link} from 'react-router-dom';

export function Destroy () {
    return (
        <>
            <Link id="destruction" to="/">Астероиды</Link>
            <label id="asteroids">Уничтожение</label>
        </>
    );
}