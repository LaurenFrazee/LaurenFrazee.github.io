let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

let events = [
    { date: '2023-12-25', event: 'Christmas' },
    { date: '2024-01-01', event: 'New Year' },
    { date: '2023-12-20', event: 'Webinar' },
    
];



function updateCalendar(month, year) {
    let table = document.getElementById('calendarTable');
    table.innerHTML = '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>';

    document.getElementById('monthYear').textContent = new Date(year, month).toLocaleString('default', { month: 'long' }) + ' ' + year;

    let firstDay = new Date(year, month, 1).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let date = 1;
    for (let i = 0; i < 6; i++) {
        let row = table.insertRow(-1);
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay || date > daysInMonth) {
                let cell = row.insertCell(-1);
                cell.innerHTML = '';
            } else {
                let cell = row.insertCell(-1);
                let event = events.find(function(e) {
                    return e.date === new Date(year, month, date).toISOString().split('T')[0];
                });
                if (event) {
                    cell.innerHTML = '<div class="calendar-cell"><span class="date-number">' + date + '</span> <span style="color:red;">●</span> ' + event.event + '</div>';
                } else {
                    cell.innerHTML = '<div class="calendar-cell"><span class="date-number">' + date + '</span></div>';
                }
                if (month === new Date().getMonth() && year === new Date().getFullYear() && date === new Date().getDate()) {
                    cell.classList.add('today');
                } else if (new Date(year, month, date) < new Date()) {
                    cell.classList.add('past');
                }
                date++;
            }
        }
    }
}

document.getElementById('prevMonth').addEventListener('click', function() {
    if (currentMonth > 0) {
        currentMonth--;
    } else {
        currentMonth = 11;
        currentYear--;
    }
    updateCalendar(currentMonth, currentYear);
});

document.getElementById('nextMonth').addEventListener('click', function() {
    if (currentMonth < 11) {
        currentMonth++;
    } else {
        currentMonth = 0;
        currentYear++;
    }
    updateCalendar(currentMonth, currentYear);
});

updateCalendar(currentMonth, currentYear);
