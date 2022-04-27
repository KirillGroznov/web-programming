function DatePosition (date) {
    let yyyy=date.getFullYear();
    let mm=(date.getMonth())>8?(date.getMonth()+1):('0'+(date.getMonth()+1));
    let dd=(date.getDate())>9?date.getDate():('0'+date.getDate());
    let string=yyyy+'-'+mm+'-'+dd;
    return string;
}

export function Url () {
    let now = new Date();
    let start=DatePosition(now);
    let week = new Date();
    week.setDate(week.getDate() + 7);
    let end=DatePosition(week);
    let key = process.env.REACT_APP_API_KEY;
    if (!key) key='DEMO_KEY';
    let string='https://api.nasa.gov/neo/rest/v1/feed?start_date='+start+'&end_date='+end+'&api_key='+key;
    return string;
}

export function AsteroidsArray (data) {
    let arr = [];
    for(let Date in data.near_earth_objects) {
        for(let Name in data.near_earth_objects[Date]) {
            arr.push ({
                name: data.near_earth_objects[Date][Name].name,
                date: data.near_earth_objects[Date][Name].close_approach_data[0].close_approach_date,
                distance: ((data.near_earth_objects[Date][Name].close_approach_data[0].miss_distance.kilometers)/1).toFixed(2),
                size: ((data.near_earth_objects[Date][Name].estimated_diameter.meters.estimated_diameter_min+data.near_earth_objects[Date][Name].estimated_diameter.meters.estimated_diameter_max)/2).toFixed(2),
                grade: data.near_earth_objects[Date][Name].is_potentially_hazardous_asteroid?"опасен":"не опасен"
            });
        }
    }
    return arr;
}