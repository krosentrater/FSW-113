// Convert Temp function
export default function convertTemps(country, temp) {
    if (country == 'US'){
        temp = parseInt((Number(temp) - 273.15) * 9/5 + 32) + 'F';
    }
    else {
        temp = parseInt(Number(temp) - 273.15) + 'C';
    }
    return temp;
};