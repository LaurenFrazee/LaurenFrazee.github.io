var currentMonth = new Date().getMonth();
var currentYear = new Date().getFullYear();

function updateCalendar(month, year) {
    var table = document.getElementById('calendarTable');
    table.innerHTML = '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>';

    document.getElementById('monthYear').textContent = new Date(year, month).toLocaleString('default', { month: 'long' }) + ' ' + year;

    var firstDay = new Date(year, month, 1).getDay();
    var daysInMonth = 32 - new Date(year, month, 32).getDate();

    var date = 1;
    for (var i = 0; i < 6; i++) {
        var row = table.insertRow(-1);
        for (var j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay || date > daysInMonth) {
                var cell = row.insertCell(-1);
                cell.innerHTML = '';
            } else {
                var cell = row.insertCell(-1);
                cell.innerHTML = date;
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
