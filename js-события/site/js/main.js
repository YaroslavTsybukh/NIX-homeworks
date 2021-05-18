//Popover
$(function () {
    $('[data-toggle="popover"]').popover({
        'placement': 'right',
        'template': '<div class="popover" role="tooltip"><div class="arrow"></div><span class="close btn float-right pop-close">&times;</span><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
    const hideHandler = function () {
        $('[data-toggle="popover"]').popover("hide")
    }
    $('[data-toggle="popover"]').on('shown.bs.popover', function () {
        $(".close").on("click", hideHandler)
    })
    $('[data-toggle="popover"]').on('hidden.bs.popover', function () {
        $(".close").off("click", hideHandler)
    })
})
//Задание 1
window.addEventListener("scroll", function () {
    let scrollBar = document.querySelector(".progress-bar")
    let scroll = document.documentElement.scrollTop
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let scrolled = scroll / height * 100
    scrollBar.style.width = scrolled + "%"
})
//Задание 2
let firstInput = document.querySelector("#exampleInputName1")
let secondInput = document.querySelector("#exampleInputEmail1")
let textArea = document.querySelector("#exampleFormControlTextarea1")
const buttonModal = document.querySelector(".form-button button.btn-primary")
let formErrors = {}

function setDisabledButton() {
    if (firstInput && secondInput && textArea && !Object.values(formErrors).length) {
        buttonModal.disabled = false
    } else {
        buttonModal.disabled = true
    }
}

function validateInput(validate, error, field) {
    if (validate) {
        formErrors[field] = "error message"
        error.textContent = formErrors[field]
    } else {
        error.textContent = ""
        delete formErrors[field]
    }
}

firstInput.addEventListener('input', (e) => {
    const validate = e.target.value.split("").some(latter =>  latter.trim() === "" ? false : !isNaN(latter))
    const error = e.target.closest(".form-group").querySelector('.text-danger')
    const name = e.target.getAttribute('name')

    validateInput(validate, error, name)
    setDisabledButton()
})

secondInput.addEventListener('input', (e) => {
    const validate = e.target.value.trim().length <= 3
    const error = e.target.closest(".form-group").querySelector('.text-danger')
    const name = e.target.getAttribute('name')

    validateInput(validate, error, name)
    setDisabledButton()
})

textArea.addEventListener('input', (e) => {
    const validate = e.target.value.trim().length <= 3
    const error = e.target.closest(".form-group").querySelector('.text-danger')
    const name = e.target.getAttribute('name')

    validateInput(validate, error, name)
    setDisabledButton()
})

document.querySelector("#form").addEventListener("submit", (e) => {
    e.preventDefault()

    localStorage.setItem("data", JSON.stringify({name: firstInput.value, email:secondInput.value, message: textArea.value}))

    buttonModal.setAttribute("data-toggle", 'modal')
    buttonModal.click()
    buttonModal.removeAttribute('data-toggle');
})

document.querySelector(".modal-footer .btn-success").addEventListener('click', ()=>{
    window.location.href = "alert.html"
})

//Задание 3
const check = document.querySelector('#check');
const header = document.querySelector("header")
const navBar = document.querySelector(".bg-light")
const mainTag = document.querySelector("main")
const headingElement = document.querySelectorAll("h2")
const accordionElement = document.querySelector(".accordion")
const formElement = document.querySelector("form")
const footerElement = document.querySelector("footer")
const menuElement = document.querySelector(".navbar-toggler")

check.addEventListener('change', () => {
    header.classList.toggle('dark-header');
    navBar.classList.toggle('bg-light')
    mainTag.classList.toggle('dark-main')
    headingElement.forEach(elem => {
        elem.classList.toggle("dark-h2")
    })
    accordionElement.classList.toggle("dark-accordion")
    formElement.classList.toggle("dark-form")
    footerElement.classList.toggle("dark-footer")
    menuElement.classList.toggle("dark-toggler")
});
//Задание 4
document.addEventListener("copy", function (e) {
    e.preventDefault()
    alert("Копирование запрещено")
})
document.addEventListener("contextmenu",function(e){
    e.preventDefault()
})
document.addEventListener("keydown", function (e) {
    if (e.code == "KeyU" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault()
    }
})

//Задание 5
function inactivityTime() {
    let time;
    window.onload = resetTimer
    document.onclick = resetTimer
    document.onpointermove = resetTimer
    document.onkeypress = resetTimer
    document.onscroll = resetTimer

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(() => {
            let answer = confirm("Вы еще здесь?")
            if (answer !== true) {
                window.close()
            }
        }, 300000)
    }
}

inactivityTime()

//Задание 6
function nameBrowser() {
    let ua = navigator.userAgent;
    if (ua.search(/Chrome/) > 0) return 'Google Chrome' + " " + parseInt(navigator.appVersion);
    if (ua.search(/Firefox/) > 0) return 'Firefox' + " " + parseInt(navigator.appVersion);
    if (ua.search(/Opera/) > 0) return 'Opera' + " " + parseInt(navigator.appVersion);
    if (ua.search(/Safari/) > 0) return 'Safari' + " " + parseInt(navigator.appVersion);
    if (ua.search(/MSIE/) > 0) return 'Internet Explorer' + " " + parseInt(navigator.appVersion);
    return 'Не определен';
}

let browser = nameBrowser();
let browserInfo = document.querySelector(".browsers-info")
browserInfo.textContent = browser
//Задание 7
const anchors = document.querySelectorAll('a[href*="#"]')
anchors.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault()
        const href = this.getAttribute("href").substring(1)
        if (!href) return
        const scrollElem = document.getElementById(href)
        let topOffset = 100
        let elem = scrollElem.getBoundingClientRect().top
        let offsetTop = elem - topOffset
        window.scrollBy({
            top: offsetTop,
            behavior: "smooth"
        })
    })
})
