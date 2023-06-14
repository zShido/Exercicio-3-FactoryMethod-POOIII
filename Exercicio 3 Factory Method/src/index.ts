import Location from "./location/Location";
import MovieLocation from "./location/MovieLocation"
import GameLocation from "./location/GameLocation"

declare var process;
let location : Location;

if(process.argv.includes("Filme")){
    location = new MovieLocation();
    location.startitem();
}else if(process.argv.includes("Jogo")){
    location = new GameLocation();
    location.startitem();
}else{
    console.log("Tipo de locação Inválida");
}