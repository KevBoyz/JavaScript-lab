// Object Factory section
function step1() {
    newObject.style.backgroundColor = '#636363'
    newObject.style.color = '#454545'
    newObject.style.textShadow = 'none'
    newObject.disabled = true
    document.getElementById('obj-key').disabled = false
    document.getElementById('obj-key-val').disabled = false
    clObj.disabled = false
    nextStep1.disabled = false
    adAtb.disabled = false
    adAtb.style.backgroundColor = '#00ad009d'
    adAtb.style.color = 'white'
    adAtb.style.textShadow = '1px 1px 2px black'
    object = new Object()
    preview.innerHTML = printObject(object)
}
function printObject(o) {
    let data = ''
    for (let p in o) {data += `\'${p}\'` + ': ' + o[p] + ', '}
    return(`{ ${data.slice(0, -2)} }`) 
}
function addAtribute() {
    let key = document.getElementById('obj-key').value
    let value = document.getElementById('obj-key-val').value
    object[key] = value
    preview.innerHTML = printObject(object)
    document.getElementById('obj-key').value = ''
    document.getElementById('obj-key-val').value = ''
}
let object = ''
const preview = document.getElementById('display-p')
const newObject = document.getElementById('new-ob-btn')
const adAtb = document.getElementById('add-atb-btn')
const clObj = document.getElementById('cl-obj')
const nextStep1 = document.getElementById('obj-save-btn')
newObject.addEventListener('click', step1)
adAtb.addEventListener('click', addAtribute)
