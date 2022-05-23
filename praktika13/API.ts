import { Asteroid } from "../../Card/Card";

export function DatePosition(date: Date): string {
    const yyyy = date.getFullYear();
    const mm =
        date.getMonth() > 8 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    const dd = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
    return `${yyyy}-${mm}-${dd}`;
}

export function Url(key: string): string {
    const now = new Date();
    const start = DatePosition(now);
    const week = new Date();
    week.setDate(week.getDate() + 7);
    const end = DatePosition(week);
    return `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start}&end_date=${end}&api_key=${key}`;
}

function PushArray(data: any): Asteroid {
    return {
        name: data.name,
        date: data.close_approach_data[0].close_approach_date,
        distance: data.close_approach_data[0].miss_distance.kilometers / 1,
        size:
            (data.estimated_diameter.meters.estimated_diameter_min +
                data.estimated_diameter.meters.estimated_diameter_max) /
            2,
        grade: data.is_potentially_hazardous_asteroid ? "опасен" : "не опасен",
    };
}

export function AsteroidsArray(data: any): Asteroid[] {
    const arr = [];
    for (const Date in data.near_earth_objects) {
        for (const Name in data.near_earth_objects[Date]) {
            arr.push(PushArray(data.near_earth_objects[Date][Name]));
        }
    }
    return arr;
}