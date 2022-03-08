function addMainTitle(){
    var mainTitle = document.createElement('h1')
    mainTitle.className = 'title'
    mainTitle.textContent = 'The Super Tuper Formulary!'
    formSection.appendChild(mainTitle)
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

let addMain = document.getElementById('addMain')
let addPh = document.getElementById('addPh')
let clear = document.getElementById('clear')

addMain.addEventListener('click', addMainTitle)
clear.addEventListener('click', clearAll)