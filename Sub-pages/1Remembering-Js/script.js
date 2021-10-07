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
function valid(name, email, password) {
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
    valid(name, email, password)
}

const lgButton = document.querySelector('#lg-button')
const lgOutput = document.querySelector('#lg-output')
lgButton.addEventListener('click', get)

// Calculator section 
function calc() {
    let n1 = Number(document.getElementById('n1').value) 
    let n2 = Number(document.getElementById('n2').value)
    let mthd = document.getElementById('type-c').value
    if (n1.length === 0 | n2.length === 0 | mthd.length === 0) {
        window.alert('Error, fill the calculator inputs.')
    } else if (mthd != '+' && mthd != '-' && mthd != '*' && mthd != '/') {
        window.alert('Error, Mthd is incorrect, use one of the options.')
    } else {
        if (mthd === '+') {
            document.getElementById('calc-r').innerHTML = n1 + n2
        } else if (mthd === '-') {
            document.getElementById('calc-r').innerHTML = n1 - n2  //bug
        } else if (mthd === '*') {
            document.getElementById('calc-r').innerHTML = n1 * n2
        } else if (mthd === '/') {
            document.getElementById('calc-r').innerHTML = n1 / n2  //bug
        }
    }
    document.getElementById('n1').value = ''
    document.getElementById('n2').value = ''
    document.getElementById('type-c').value = ''
}
const ClButton = document.querySelector('#rbutton')
ClButton.addEventListener('click', calc)

// Looping section
function loop() {
    document.getElementById('loop-output').innerHTML = ''
    let ls = Number(document.getElementById('ls').value)
    let le = Number(document.getElementById('le').value)
    let lj = Number(document.getElementById('lj').value)
    for (c = ls;c <= le;c += lj) {
        document.getElementById('loop-output').innerHTML += `${c} \u{1f449}`
    }
    document.getElementById('loop-output').innerHTML += '\u{1F3C1}'
    document.getElementById('ls').value = ''
    document.getElementById('le').value = ''
    document.getElementById('lj').value = ''
}
let lbutton = document.getElementById('lp-button')
lbutton.addEventListener('click', loop)

//Array section
function validate(){
    if (array.indexOf(document.getElementById('data').value) === -1) {
        pushArray()
    } else {
        window.alert('Error, the value already exists')
    }
}
function pushArray() {
    array.push(document.getElementById('data').value)
    opt = document.createElement('option')
    opt.text = `${array[array.length - 1]} has inserted`
    box.appendChild(opt)
    document.getElementById('data').value = ''
}
let array = []
let dbutton = document.querySelector('#dbutton')
box = document.getElementById('array-box')
dbutton.addEventListener('click', validate)