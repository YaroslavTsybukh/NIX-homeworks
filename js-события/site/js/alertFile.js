const {name = "", email = "", message = ""} = JSON.parse(localStorage.getItem('data'))

alert("Имя" + ":" + " " + name + " " + "\n"
    + "Email" + ":" + " " + email + " " + "\n"
    + "Сообщение" + ":" + " " + message)