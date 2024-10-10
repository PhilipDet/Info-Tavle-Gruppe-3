export const displayData = (data) => {
    const container = document.getElementById("bustiderne");
    if (container) {
        if (
            data &&
            data.MultiDepartureBoard &&
            data.MultiDepartureBoard.Departure
        ) {
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
            container.innerHTML = "<p>Intet afgangs data fundet</p>";
        }
    } else {
        console.error("Fejl: Kunne ikke finde data-container");
    }
};