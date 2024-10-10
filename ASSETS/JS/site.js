import menu from "./modules/menu/menu.js";
import schedule from "./modules/schedule/schedule.js";
import { updateClock } from "./modules/clock/clock.js";
import { displayData } from "./modules/bustider/bustider.js";

updateClock();

fetchData(
    "https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?type=json",
    "menu"
);

fetchData(
    "https://iws.itcn.dk/techcollege/schedules?departmentcode=smed",
    "schedule"
);

fetchData(
    "https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400602&id2=851973402&rttime&format=json&useBus=1",
    "bus"
);

setInterval(() => {
    fetchData(
        "https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?type=json",
        "menu"
    );
}, 3600 * 1000); // 1 time

setInterval(() => {
    fetchData(
        "https://iws.itcn.dk/techcollege/schedules?departmentcode=smed",
        "schedule"
    );
}, 30 * 1000); // 30 sekunder

setInterval(() => {
    fetchData(
        "https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400602&id2=851973402&rttime&format=json&useBus=1",
        "bus"
    );
}, 30 * 1000); // 30 sekunder

function fetchData(url, type) {
    fetch(url)
        .then((result) => {
            //console.log(result);
            return result.json();
        })

        .then((data) => {
            //console.log(data);

            switch (type) {
                case "bus":
                    console.log(data);

                    displayData(data);
                    break;
                case "menu":
                    menu(data);
                    break;
                case "schedule":
                    console.log(data);

                    schedule(data.value);
                    break;
                default:
                    console.log("Ingen typer defineret");
            }
        });
}

let vid = document.getElementById("backgroundVideo");
vid.playBackRate = 0.1;
