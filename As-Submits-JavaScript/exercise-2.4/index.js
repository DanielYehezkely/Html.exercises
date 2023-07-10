function todayDate() {
    const daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsArray = [
        "January", "February", "March", 
        "April", "May", "June", 
        "july", "August", "september", 
        "October", "November", "December"
    ]
    const today = new Date();
    return `Today is ${daysArray[today.getDay()]} the ${today.getDate()} of ${monthsArray[today.getMonth()]} ${today.getFullYear()}`
}

const currentDate = todayDate();
console.log(currentDate);

// refactored code from  .....


