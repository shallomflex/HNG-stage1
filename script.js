// TO GET CURRENT DAY OF THE WEEK

// create a new Date object
const currentDate = new Date();

// Define an array of the days of the week
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Get the current day of the week (with 0 for sunday and 6 for saturday)
const dayIndex = currentDate.getDay();

// use the dayIndex to get the day name from the daysOfWeek
const currentDayOfWeek = daysOfWeek[dayIndex];

// Target the element to display the day in Html document
const dayOfWeekDisplay = document.getElementById('current_day');

// Displayc current day in Html element
dayOfWeekDisplay.textContent += currentDayOfWeek;


// TO GET CURRENT UTC TIME
const currentUTCDate = new Date().toUTCString();

const utcTimeDisplay = document.getElementById('UTC_time');

utcTimeDisplay.textContent += currentUTCDate;