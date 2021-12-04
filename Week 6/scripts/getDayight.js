// Light backgroundColor function
export default function dayLight(sunrise, sunset, localtime){
    const dt = new Date();
    let backgroundColor = 'rgba(236, 144, 24, 0.788)';
    if (localtime < sunrise || localtime > sunset) backgroundColor = 'rgb(27, 39, 77)';
    return backgroundColor;
};