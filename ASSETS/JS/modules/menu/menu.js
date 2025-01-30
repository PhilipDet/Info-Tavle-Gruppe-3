export default function menu(data) {
    let currentDay = new Date().getDay();
    const menuElement = document.getElementById("menu-container");
    const h2Element = document.querySelector("#menu hgroup h2");
    h2Element.innerHTML = `DEN VARME <br> UGE ${data.Week}`;

    const formatText = (text) => {
        return text
            .replace(/\b[Mm]ed\b/g, "+")
            .replace(/\b[Oo]g\b/g, "&")
            .slice(0, -12);
    };

    data.Days.forEach((day) => {
        let dayShortName = day.DayName.slice(0, 3);
        const container = document.createElement("div");
        container.innerHTML = `
            <h3>${dayShortName}</h3>
            <h3>${formatText(day.Dish)}</h3>
        `;

        day.DayName === daysName[currentDay] &&
            container.classList.add("today");

        menuElement.appendChild(container);
    });
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
