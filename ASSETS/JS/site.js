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
}, 15 * 1000); // 15 sekunder

setInterval(() => {
    fetchData(
        "https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400602&id2=851973402&rttime&format=json&useBus=1",
        "bus"
    );
}, 10 * 1000); // 10 sekunder

function fetchData(url, type) {
    fetch(url)
        .then((result) => {
            return result.json();
        })
        .catch((error) => {
            console.error("Fejl: ", error);
            return null;
        })
        .then((data) => {
            switch (type) {
                case "bus":
                    displayData(data);
                    break;
                case "menu":
                    menu(data);
                    break;
                case "schedule":
                    schedule(data.value);
                    break;
                default:
                    console.log("Ingen typer defineret");
            }
        });
}

let vid = document.getElementById("backgroundVideo");
vid.playbackRate = 0.75;
