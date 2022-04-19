import {Head} from '../Modules/Head/Head';
import {Asteroid1} from "../Modules/Asteroid 1/Asteroid1";
import {Asteroid2} from "../Modules/Asteroid 2/Asteroid2";
import {Asteroid3} from "../Modules/Asteroid 3/Asteroid3";
import {OtherInfo} from "../Modules/OtherInfo/OtherInfo";

export function Asteroid () {
    return (
        <>
            <Head/>
            <Asteroid1/>
            <Asteroid2/>
            <Asteroid3/>
            <OtherInfo/>
        </>
    );
}