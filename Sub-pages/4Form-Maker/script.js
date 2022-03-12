function addaTitle(){
    var title = document.createElement('h1')
    title.className = 'title'
    title.textContent = 'The Super Tuper Formulary!'
    formSection.appendChild(title)
}
function addPha(){
    var paragraph = document.createElement('p')
    paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reprehenderit consectetur dolorum veritatis. Molestias repellat ratione expedita commodi dolor, ipsa unde, enim nihil debitis eveniet odit ut soluta ipsum cum!'
    formSection.appendChild(paragraph)
}
function addMchoose(){
    var multichoseBox = document.createElement('div')
    multichoseBox.className = 'radio-div'
    let lineBreak = null
    let item = null
    let label = null
    let name = String(Math.trunc(Math.random() * 10000))
    for (let i = 1;i <= 4;i++){
        lineBreak = document.createElement('br')
        item = document.createElement('input')
        item.type = 'radio'
        item.name = name
        label = document.createElement('label')
        if (i == 1) {label.textContent = 'a) Lorem ipsum dolor sit amet consectetur adipisicing elit'}
        else if (i == 2) {label.textContent = 'b) Lourem ipsum dolor sit amet consectetur adipisicing elit'}
        else if (i == 3) {label.textContent = 'c) Lorem ipsum dalor sit amet consectetur adipisicing elit'}
        else if (i == 4) {label.textContent = 'd) Lorem ipsum dalor sit amet consectetur adipisicined elit'}
        multichoseBox.appendChild(item)
        multichoseBox.appendChild(label)
        multichoseBox.appendChild(lineBreak)
    }
    formSection.appendChild(multichoseBox)
}
function clearAll(){
    while (formSection.lastChild) {
        formSection.removeChild(formSection.lastChild)
    }
}
function remove_last_child() {
    var select = document.getElementById('parent_element');
    select.removeChild(select.lastChild);
}

let formSection = document.getElementById('form-section') 

let addTitle = document.getElementById('addTitle')
let addPh = document.getElementById('addPh')
let addMch = document.getElementById('addMch')
let clear = document.getElementById('clear')

addTitle.addEventListener('click', addaTitle)
clear.addEventListener('click', clearAll)
addPh.addEventListener('click', addPha)
addMch.addEventListener('click', addMchoose)