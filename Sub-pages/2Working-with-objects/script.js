// Object Factory section
const greeting = function () {
    window.alert('Hello World')
}
const whamI = function() {
    window.alert('I am is')
}
const myinfo = function() {
    window.alert(`prototype`)
}
const tphil = function() {
    window.alert(`prototype`)
}
function unlock() {
    newObject.style.backgroundColor = '#636363'
    newObject.style.color = '#454545'
    newObject.style.textShadow = 'none'
    newObject.disabled = true
    document.getElementById('obj-key').disabled = false
    document.getElementById('obj-key-val').disabled = false
    clObj.disabled = false
    delobj.disabled = false
    adAtb.disabled = false
    restoreMth.disabled = false
    applyMth.disabled = false
    save.disabled = false
    cbGreeting.disabled = false
    cbWhamI.disabled = false
    cbMyinfo.disabled = false
    cbTphil.disabled = false
    adAtb.style.backgroundColor = '#00ad009d'
    adAtb.style.color = 'white'
    adAtb.style.textShadow = '1px 1px 2px black'
    save.style.backgroundColor = '#00ad009d'
    save.style.color = 'white'
    save.style.textShadow = '1px 1px 2px black'
    applyMth.style.backgroundColor = '#00ad009d'
    applyMth.style.color = 'white'
    applyMth.style.textShadow = '1px 1px 2px black'
    clObj.style.backgroundColor = '#ff060659'
    clObj.style.color = 'white'
    clObj.style.textShadow = '1px 1px 2px black'
    delobj.style.backgroundColor = '#ff060659'
    delobj.style.color = 'white'
    delobj.style.textShadow = '1px 1px 2px black'
    restoreMth.style.backgroundColor = '#ff060659'
    restoreMth.style.color = 'white'
    restoreMth.style.textShadow = '1px 1px 2px black'
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
    if (key == '' || value == '') {
        window.alert('Fill all inputs befora add new atribute')
    } else {
        object[key] = value
        preview.innerHTML = printObject(object)
        document.getElementById('obj-key').value = ''
        document.getElementById('obj-key-val').value = ''
    }
}
function clear() {
    object = new Object()
    preview.innerHTML = printObject(object)
}
function del() {
    let key = document.getElementById('obj-key').value
    if (object.hasOwnProperty(key)) {
        delete object[key]
        preview.innerHTML = printObject(object)
    } else {
        window.alert(`Error, atribute ${key} not founded on object`)
    }
    document.getElementById('obj-key').value = ''
}
function addMth(){
    cbGreeting = document.getElementById('greeting')
    cbWhamI = document.getElementById('whamI')
    cbMyinfo = document.getElementById('myinfo')
    cbTphil = document.getElementById('tphil')
    if (cbGreeting.checked) {
        object.greeting = greeting
    }
    if (cbWhamI.checked) {
        object.whamI = whamI
    }
    if (cbMyinfo.checked) {
        object.myinfo = myinfo
    }
    if (cbTphil.checked) {
        object.tphil = tphil
    }
    preview.innerHTML = printObject(object)
}
function restoreMthds() {
    delete object.greeting
    delete object.whamI
    delete object.myinfo
    delete object.tphil
    preview.innerHTML = printObject(object)
    cbGreeting = document.getElementById('greeting').checked = false
    cbWhamI = document.getElementById('whamI').checked = false
    cbMyinfo = document.getElementById('myinfo').checked = false
    cbTphil = document.getElementById('tphil').checked = false
}
function objSave() {
    array.push(object)
    arrPreview.innerHTML += printObject(object)
    arrPreview.appendChild(br)
    newObject.disabled = false
    document.getElementById('obj-key').disabled = true
    document.getElementById('obj-key-val').disabled = true
    clObj.disabled = true
    delobj.disabled = true
    adAtb.disabled = true
    restoreMth.disabled = true
    applyMth.disabled = true
    save.disabled = true
    cbGreeting.disabled = true
    cbWhamI.disabled = true
    cbMyinfo.disabled = true
    cbTphil.disabled = true
    clObj.style.backgroundColor = '#636363'
    clObj.style.color = '#454545'
    clObj.style.textShadow = 'none'
    delobj.style.backgroundColor = '#636363'
    delobj.style.color = '#454545'
    delobj.style.textShadow = 'none'
    adAtb.style.backgroundColor = '#636363'
    adAtb.style.color = '#454545'
    adAtb.style.textShadow = 'none'
    applyMth.style.backgroundColor = '#636363'
    applyMth.style.color = '#454545'
    applyMth.style.textShadow = 'none'
    save.style.backgroundColor = '#636363'
    save.style.color = '#454545'
    save.style.textShadow = 'none'
    restoreMth.style.backgroundColor = '#636363'
    restoreMth.style.color = '#454545'
    restoreMth.style.textShadow = 'none'
    newObject.style.backgroundColor = '#00ad009d'
    newObject.style.color = 'white'
    newObject.style.textShadow = '1px 1px 2px black'
    object = new Object()
    preview.innerHTML = 'ObjectPreview - Start creating new one'
}
let object = {}
let array = []
let br = document.createElement('br')
const preview = document.getElementById('display-p')
const arrPreview = document.getElementById('obj-arr-preview')
const newObject = document.getElementById('new-ob-btn')
const adAtb = document.getElementById('add-atb-btn')
const clObj = document.getElementById('cl-obj')
const delobj = document.getElementById('obj-del-atb')
const restoreMth = document.getElementById('restore-mth')
const applyMth = document.getElementById('apply-mth')
const save = document.getElementById('save-obj')
let cbGreeting = document.getElementById('greeting')
let cbWhamI = document.getElementById('whamI')
let cbMyinfo = document.getElementById('myinfo')
let cbTphil = document.getElementById('tphil')
newObject.addEventListener('click', unlock)
adAtb.addEventListener('click', addAtribute)
clObj.addEventListener('click', clear)
delobj.addEventListener('click', del)
applyMth.addEventListener('click', addMth)
restoreMth.addEventListener('click', restoreMthds)
save.addEventListener('click', objSave)

