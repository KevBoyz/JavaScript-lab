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
    let lineBreak = document.createElement('br');
    multichoseBox.className = 'radio-div'
    let item1 = document.createElement('input')
    item1.type = 'radio'
    item1.name = 'a'
    let label1 = document.createElement('label')
    label1.textContent = 'a) Lorem ipsum dolor sit amet consectetur adipisicing elit'
    
    multichoseBox.appendChild(item1)
    multichoseBox.appendChild(label1)
    multichoseBox.appendChild(lineBreak)

    lineBreak = document.createElement('br');
    let item2 = document.createElement('input')
    item2.type = 'radio'
    item2.name = 'a'
    let label2 = document.createElement('label')
    label2.textContent = 'b) Lorem ipsum dolor sit amet consectetur adipisicing elite'
    multichoseBox.appendChild(item2)
    multichoseBox.appendChild(label2)
    multichoseBox.appendChild(lineBreak)

    lineBreak = document.createElement('br');
    let item3 = document.createElement('input')
    item3.type = 'radio'
    item3.name = 'a'
    let label3 = document.createElement('label')
    label3.textContent = 'c) Lorem ipsum dolor sit amet consectotur adipisicing elit'
    multichoseBox.appendChild(item3)
    multichoseBox.appendChild(label3)
    multichoseBox.appendChild(lineBreak)

    lineBreak = document.createElement('br');
    let item4 = document.createElement('input')
    item4.type = 'radio'
    item4.name = 'a'
    let label4 = document.createElement('label')
    label4.textContent = 'd) Lorem ipsum dolore sit amet consectetur adipisicing elit'
    multichoseBox.appendChild(item4)
    multichoseBox.appendChild(label4)
    multichoseBox.appendChild(lineBreak)

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