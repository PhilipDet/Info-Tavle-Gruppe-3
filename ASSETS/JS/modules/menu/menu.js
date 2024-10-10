export default function menu(data) {
    const menuElement = document.getElementById("menu-container");
    const h2Element = document.querySelector("#menu hgroup h2");
    h2Element.innerHTML = `DEN VARME <br> UGE ${data.Week}`;
    let html = "";

    data.Days.forEach((day) => {
        let dayShortName =
            day.DayName === "torsdag" ? "tors" : day.DayName.slice(0, 3);

        html += `
            <div>
                <h3>${dayShortName}</h3>
                <h3>${day.Dish.slice(0, -12)}</h3>
            </div>
        `;
    });

    menuElement.innerHTML += html;
}
