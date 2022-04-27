import {Link} from 'react-router-dom';

export function Destroy () {
    document.title=`Уничтожение`;

    return (
        <>
            <Link id="destruction" to="/">Астероиды</Link>
            <label id="asteroids">Уничтожение</label>
        </>
    );
} 