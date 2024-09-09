const releaseDay = new Date(2024, 8, 19, 19)

const daysLabel = document.getElementById("day-counter")
const hoursLabel = document.getElementById("hour-counter")
const minutesLabel = document.getElementById("minute-counter")

setTimerCount()


function setTimerCount() {
    const today = new Date()
    const restantMinutes = (releaseDay - today) / (1000 * 60)

    const daysTotal = (restantMinutes / (60 * 24))
    const days = Math.floor(daysTotal)

    const hoursTotal = (daysTotal - days) * 24
    const hours = Math.floor(hoursTotal)

    const minutesTotal = (hoursTotal - hours) * 60
    const minutes = Math.floor(minutesTotal)

    daysLabel.textContent = leftPad(days, 2)
    hoursLabel.textContent = leftPad(hours, 2)
    minutesLabel.textContent = leftPad(Math.ceil(minutesTotal), 2)

    const seconds = (minutesTotal - minutes) * 60

    const timeout = setTimeout(() => {
        setTimerCount();
        clearTimeout(timeout)
    }, seconds * 1000)
}

function leftPad(value, totalWidth) {
    return ("0000000000" + value).slice(-totalWidth)
};