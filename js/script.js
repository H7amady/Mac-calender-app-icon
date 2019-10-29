const date = new  Date()

const month = date.toLocaleString('default', {month: 'short'});
const day = date.toLocaleString('default', {day: 'numeric'});

console.log(day)

document.getElementById('month').innerText = month;
document.getElementById('day').innerText = day;