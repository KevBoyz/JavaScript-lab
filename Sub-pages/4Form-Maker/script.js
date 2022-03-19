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
    let titleSubmitButton = document.createElement('input')
    titleSubmitButton.type = 'button'
    titleSubmitButton.value = 'Submit Title'
    titleSubmitButton.className = 'blue'
    titleSubmitButton.id = 'titleSubmitButton'
    blankDiv.appendChild(titleSubmitButton)
    titleInput.appendChild(blankDiv)
    // Get html elements
    titleSubmitButton = document.getElementById('titleSubmitButton')
    titleSubmitButton.addEventListener('click', addaTitle)
}
function openParagrphInput(){
    let paragraphInput = document.getElementById('paragraph-input')
    if (paragraphInput.childElementCount >= 1){
        return
    }
    let blankDiv = document.createElement('div')
    blankDiv.className = 'blank-div'
    let paragraphInputText = document.createElement('input')
    paragraphInputText.type = 'text'
    paragraphInputText.id = 'paragraphInputText'
    paragraphInputText.placeholder = 'Paragraph text'
    blankDiv.appendChild(paragraphInputText)
    let paragraphSubmitButton = document.createElement('input')
    paragraphSubmitButton.type = 'button'
    paragraphSubmitButton.value = 'Submit Paragraph'
    paragraphSubmitButton.className = 'blue'
    paragraphSubmitButton.id = 'paragraphSubmitButton'
    blankDiv.appendChild(paragraphSubmitButton)
    paragraphInput.appendChild(blankDiv)
    // Get html elements
    paragraphSubmitButton = document.getElementById('paragraphSubmitButton')
    paragraphSubmitButton.addEventListener('click', addPha)
}
function openMultiChooseInput(){
    let multiInput = document.getElementById('multi-input')
    if (multiInput.childElementCount >= 1){
        return
    }
    let blankDiv = document.createElement('div')
    blankDiv.className = 'blank-div'
    
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
    let paragraphInput = document.getElementById('paragraph-input')
    let paragraphInputText = document.getElementById('paragraphInputText')
    let txt = paragraphInputText.value
    if (txt == 'lorem'){
        txt = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae veritatis quo dicta officiis exercitationem blanditiis. Explicabo illum quod, dolorem minima sed, obcaecati blanditiis voluptatibus ad delectus provident earum iure odio.'
    }
    var paragraph = document.createElement('p')
    paragraph.textContent = txt
    formSection.appendChild(paragraph)
    paragraphInput.removeChild(paragraphInput.lastChild)
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

let addTitle = document.getElementById('addTitle')
let addPh = document.getElementById('addPh')
let addMch = document.getElementById('addMch')
let clear = document.getElementById('clear')

addTitle.addEventListener('click', openTitleInput)
addPh.addEventListener('click', openParagrphInput)
addMch.addEventListener('click', openMultiChooseInput)
clear.addEventListener('click', clearAll)
