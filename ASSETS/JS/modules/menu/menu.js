export default function menu(data) {
    let currentDay = new Date().getDay();
    const menuElement = document.getElementById("menu-container");
    const h2Element = document.querySelector("#menu hgroup h2");
    h2Element.innerHTML = `DEN VARME <br> UGE ${data.Week}`;
    let html = "";

    data.Days.forEach((day) => {
        let dayShortName = day.DayName.slice(0, 3);

        if (day.DayName === daysName[currentDay]) {
            html += `
            <div class="today">
                <h3>${dayShortName}</h3>
                <h3>${day.Dish.slice(0, -12)}</h3>
            </div>
        `;
        } else {
            html += `
            <div>
                <h3>${dayShortName}</h3>
                <h3>${day.Dish.slice(0, -12)}</h3>
            </div>
        `;
        }
    });

    menuElement.innerHTML += html;
}

let daysName = [
    "søndag",
    "mandag",
    "tirsdag",
    "onsdag",
    "torsdag",
    "fredag",
    "lørdag",
];
