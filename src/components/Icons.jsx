
const Icons = (icon) => {
    switch(icon) {
        case "Clouds":{
            icon="icons/fog.svg"
            console.log("nubes")
            break;
        }
        case "Fog":{
            icon="icons/fog.svg"
            console.log("nubes")
            break;
        }
        case "Thunderstorm":{
            icon="icons/thunderstorm-rain.svg"
            console.log("tormenta")
            break;
        }
        case "Drizzle":{
            icon="icons/drizzle.svg"
            console.log("Nose")
            break;
        }
        case "Snow":{
            icon="icons/snow.svg"
            console.log("Nieve")
            break;
        }
        case "Rain":{
            icon="icons/rain.svg"
            console.log("Lluvia")
            break;
        }
        case "Clear":{
            icon="icons/clear-day.svg"
            console.log("Despejado")
            break;
        }
        case "Atmosphere":{
            icon="icons/smoke.svg"
            console.log("Nose")
            break;
        }
        case "Smoke":{
            icon="icons/smoke.svg"
            console.log("Nose")
            break;
        }
        case "Haze":{
            icon="icons/haze.svg"
            console.log("Nose")
            break;
        }
        default:
            icon="icons/clear-day.svg"
            console.log("Default")
            break;
    }
    return icon
}

export default Icons;