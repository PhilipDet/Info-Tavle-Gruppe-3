export default function schedule(schedules) {
    let currentTime = new Date();

    const filteredSchedules = schedules.filter(
        (schedule) =>
            schedule.Team === "ggr080124" ||
            schedule.Team === "h0gr100124" ||
            schedule.Team === "ump090124" ||
            schedule.Team === "h1we010124" ||
            schedule.Team === "h0gr010124f" ||
            schedule.Team === "h1we080124" ||
            schedule.Team === "h0mg010124f"
    );

    const upcomingSchedules = filteredSchedules
        .filter((schedule) => {
            let startDate = new Date(schedule.StartDate);
            return (
                currentTime < startDate &&
                getDayOfWeek(startDate) === getDayOfWeek(currentTime)
            );
        })
        .sort((a, b) => new Date(a.StartDate) - new Date(b.StartDate));

    makeSchedule(upcomingSchedules);
}

function getDayOfWeek(date) {
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    return daysOfWeek[date.getDay()];
}

function makeSchedule(schedule) {
    const scheduleElement = document.getElementById("skema-timer");
    let html = ``;

    const maxItems = Math.min(schedule.length, 11);

    for (let i = 0; i < maxItems; i++) {
        console.log(schedule[i].StartDate);

        let startDate = new Date(schedule[i].StartDate);

        let startDateHours = startDate.getHours().toString().padStart(2, "0");
        let startDateMinutes = startDate
            .getMinutes()
            .toString()
            .padStart(2, "0");

        const startTime = `${startDateHours}:${startDateMinutes}`;

        html += `
            <tr>
              <td>${schedule[i].Room}</td>
              <td>${schedule[i].Team}</td>
              <td>${schedule[i].Subject}</td>
              <td>${schedule[i].Education}</td>
              <td>${startTime}</td>
            </tr>
        `;
    }

    scheduleElement.innerHTML = html;
}
