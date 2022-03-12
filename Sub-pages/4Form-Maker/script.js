function openTitleInput(){
    let titleInput = document.getElementById('title-input')
    if (titleInput.childElementCount >= 1){
        return
    }
    let blankDiv = document.createElement('div')
    blankDiv.className = 'blank-div'
    let titleInputText = document.createElement('input')
    titleInputText.type = 'text'
    titleInputText.id = 'titleInputText'
    titleInputText.placeholder = 'Title text'
    blankDiv.appendChild(titleInputText)
    let submitButton = document.createElement('input')
    submitButton.type = 'button'
    submitButton.value = 'Submit Title'
    submitButton.className = 'blue'
    submitButton.id = 'submitButton'
    blankDiv.appendChild(submitButton)
    titleInput.appendChild(blankDiv)
    // Get html elements
    submitButton = document.getElementById('submitButton')
    submitButton.addEventListener('click', addaTitle)
}
function addaTitle(){
    let titleInputText = document.getElementById('titleInputText')
    let txt = titleInputText.value
    var title = document.createElement('h1')
    title.className = 'title'
    title.textContent = txt
    formSection.appendChild(title)
    let titleInput = document.getElementById('title-input')
    titleInput.removeChild(titleInput.lastChild)
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

var formSection = document.getElementById('form-section') 

//buttons
let addTitle = document.getElementById('addTitle')
let addPh = document.getElementById('addPh')
let addMch = document.getElementById('addMch')
let clear = document.getElementById('clear')

//input divs

let paragraphInput = document.getElementById('paragraph-input')

addTitle.addEventListener('click', openTitleInput)
clear.addEventListener('click', clearAll)
addPh.addEventListener('click', addPha)
addMch.addEventListener('click', addMchoose)
