export const displayData = (data) => {
    const container = document.getElementById("bustiderne");
    if (container) {
        if (data !== null) {
            const departures = data.MultiDepartureBoard.Departure;

            // Sorter Ankomst tid
            departures.sort((a, b) => {
                const timeA = a.date + " " + a.time;
                const timeB = b.date + " " + b.time;
                return new Date(timeA) - new Date(timeB);
            });

            // Clear html (den skal rettes til projektet)
            container.innerHTML = "";

            // Create and append elements for each departure
            departures.forEach((dep, index) => {
                if (index < 5) {
                    const card = document.createElement("div");
                    card.className = "bustid";

                    // Get only the first part of dep.stop
                    const stop = dep.stop.split(" ")[0];

                    card.innerHTML = `
                    <p class="stop">${stop}</p>
                    <p class="name">${dep.name}</p>
                    <p class="time">${dep.time}</p>
                `;
                    container.appendChild(card);
                }
            });
        } else {
            const card = document.createElement("div");
            card.className = "bustid no-data";
            card.innerHTML = "<p>Intet afgangs data fundet</p>";
            container.innerHTML = `
                <div class="bustid no-data">
<p>Seriøst... Vil du hellere fare vild som en dum mongol end at bruge Rejseplanen?!</p>
                </div>
            `;
        }
    } else {
        console.error("Fejl: Kunne ikke finde data-container");
    }
};
