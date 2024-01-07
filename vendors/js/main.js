const calendarArea = document.getElementById("calendar")

function getMaxDayMonth(monthIndex) {
    let findedDate = new Date(2024, monthIndex, 1)
    findedDate.setDate(findedDate.getDate() + 30)

    if (findedDate.getDate() == 31) {
        return 31
    } else if (findedDate.getDate() == 1) {
        return 30
    } else if (findedDate.getDate() == 2) {
        return 29
    }
    return 28
}

function createCalendarCard(days, month) {
 
    let getWeekDay = new Date(2024, month, 1);
    let cardBody = document.createElement('div')
    let findLastBox = 35 - (days.length - getWeekDay.getDay())
    cardBody.className = "cardBody"

    for (let test = 0; test < getWeekDay.getDay(); test++) {
        let empty = document.createElement('div')
        empty.className = "dayCard"
        cardBody.append(empty)
    }
  
    for (let day = 0; day < days.length; day++) {
        let cardDiv = document.createElement('div')
        cardDiv.className = "dayCard"
        let dateP = document.createElement('p')
        dateP.innerText = days[day]
        cardDiv.append(dateP)
        cardBody.append(cardDiv)
    }
   
    for (let test = 0; test < findLastBox; test++) {
        let empty = document.createElement('div')
        empty.className = "dayCard"
        cardBody.append(empty)
    }

    calendarArea.append(cardBody)
}



for (let i = 0; i < 12; i++) {
    let findDay = getMaxDayMonth(i)
    let dayOfMonth = []
    for (let j = 1; j <= findDay; j++) {
        dayOfMonth.push(j)
    }
    createCalendarCard(dayOfMonth, i)
    calendarArea.innerHTML += `<br>`
}


