import { registerUserDataBase } from './modules/dataBase.js'

window.registerUser = registerUser;
window.handlePhone = handlePhone;

const releaseDay = new Date(2024, 8, 21, 20)

const daysLabel = document.getElementById("day-counter")
const hoursLabel = document.getElementById("hour-counter")
const minutesLabel = document.getElementById("minute-counter")

const nameInput = document.getElementById('name-input')
const numberInput = document.getElementById('number-input')
const appNameInput = document.getElementById('suggestion-input')

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

function handlePhone() {
    numberInput.value = phoneMask(numberInput.value)
}

function phoneMask(value) {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
}

function leftPad(value, totalWidth) {
    return ("0000000000" + value).slice(-totalWidth)
};

async function registerUser() {
    const name = nameInput.value
    const number = numberInput.value
    const appName = appNameInput.value

    if (!name || name == "" || name == " ") {
        showToast("Adcione um nome", "error")
        return;
    }

    if (!number || number == "" || number == " ") {
        showToast("Adcione um número para contato", "error")
        return;
    }

    await registerUserDataBase(name, number, appName)

    showToast("Ideia adicionada!!", "success")
    nameInput.value = ""
    numberInput.value = ""
    appNameInput.value = ""
}

//type: (error / success)
function showToast(message, type = "success") {
    var x = document.getElementById("snackbar");

    x.classList.add("show")
    x.classList.add(type)
    x.innerText = message

    setTimeout(function () {
        x.classList.remove("show");
        x.classList.remove(type);
    }, 2000);
}