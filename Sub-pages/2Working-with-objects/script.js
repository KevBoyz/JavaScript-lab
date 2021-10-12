// Object Factory section
// delete meuObjeto.propriedade3
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

let object = ''
const preview = document.getElementById('display-p')
const newObject = document.getElementById('new-ob-btn')
const adAtb = document.getElementById('add-atb-btn')
const clObj = document.getElementById('cl-obj')
const delobj = document.getElementById('obj-del-atb')
const restoreMth = document.getElementById('restore-mth')
const applyMth = document.getElementById('apply-mth')
const save = document.getElementById('save-obj')
const cbGreeting = document.getElementById('greeting')
const cbWhamI = document.getElementById('whamI')
const cbMyinfo = document.getElementById('myinfo')
const cbTphil = document.getElementById('tphil')
newObject.addEventListener('click', unlock)
adAtb.addEventListener('click', addAtribute)
clObj.addEventListener('click', clear)
delobj.addEventListener('click', del)

