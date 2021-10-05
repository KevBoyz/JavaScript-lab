// Login section
class Person {
    constructor (name, email, password) {
        this.name = name
        this.email = email
        this.password = password
    }
    login() {
        document.getElementById('name-op').innerHTML = this.name
        document.getElementById('email-op').innerHTML = this.email
        document.getElementById('password-op').innerHTML = this.password
    }
}
function validate(name, email, password) {
    if (password.length < 6) {
        window.alert('Error, the password must be at least 6 characters long.')
    }
    else if (name.length >= 15) {
        window.alert('Error, the name must be at least 15 characters.')
    }
    else {
        person = new Person(name, email, password)
        document.getElementById('name').value = ''
        document.getElementById('email').value = ''
        document.getElementById('password').value = ''
        person.login()
    }
    
}
function get() {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password =  document.getElementById('password').value
    const person = new Person(name, email, password)
    validate(name, email, password)
}

const lgButton = document.querySelector('#lg-button')
const lgOutput = document.querySelector('#lg-output')
lgButton.addEventListener('click', get)
