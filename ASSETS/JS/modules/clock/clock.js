export function updateClock() {
    const now = new Date();
    const days = ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'];
    const months = ['jan', 'feb', 'mar', 'apr', 'mai', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'des'];
    
    const time = now.toTimeString().slice(0, 5);
    const date = `${days[now.getDay()]} ${now.getDate()}. ${months[now.getMonth()]} ${now.getFullYear()}`;
    
    document.getElementById('clock').innerHTML = `<h2>${time}</h2><h3>${date}</h3>`;
}

setInterval(updateClock, 1000);
updateClock();