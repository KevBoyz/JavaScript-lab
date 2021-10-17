//const points = [40, 100, 1, 5, 25, 10]
//points.sort(function(a, b){return a - b}) // [1,5,10,25,40,100]


// Global functions
function updateDisplay() {
    array1Dsp.innerHTML = `[ ${array[0]} ]`
    array2Dsp.innerHTML = `[ ${array[1]} ]`
    array3Dsp.innerHTML = `[ ${array[2]} ]`
}

let array = [[], [], []]

//Display page
function loadPresets() {
    array[0] = ['James', 'Robert', 'John', 'Michael', 'William', 'David', 'Richard', 'Andrew']
    array[1] = ['q', 'a', 'z', 'w', 's', 'x', 'e', 'd', 'c', 'r', 'f', 'v', 't', 'g', 'b', 'y', 'h', 'n', 'u', 'j', 'm', 'i', 'k', 'o', 'l', 'p', 5, 4, 2, 1, 3, 'a', 'b', 'c', 'f']
    array[2] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    updateDisplay(true, true, true)
}

function clearAll() {
    array[0] = new Array()
    array[1] = new Array()
    array[2] = new Array()
    updateDisplay()
}

let array1Dsp = document.querySelector('#ardisp-1 p')
let array2Dsp = document.querySelector('#ardisp-2 p')
let array3Dsp = document.querySelector('#ardisp-3 p')

const presets = document.getElementById('presets')
const clAll = document.getElementById('cl-all')

presets.addEventListener('click', loadPresets)
clAll.addEventListener('click', clearAll)

//Testing page


//Edit area
function _push() {
    edValue = document.getElementById('ed-value').value
    if (edValue.length <= 0) {
        window.alert('Value not declarated')
    } else {
        array[edSelector.value - 1].push(edValue)
        updateDisplay()
    }
}
function _clear() {
    array[edSelector.value - 1] = new Array()
    updateDisplay()
}
function removeDup() {
    array[edSelector.value - 1] = [...new Set(array[edSelector.value - 1])]
    updateDisplay()
}

function _remove() {
    array[edSelector.value - 1] = array[edSelector.value - 1].filter(
        function(value) {
            if (value != document.getElementById('ed-value').value) {
                return value
            }
        }
    )
    updateDisplay()
}
            
function _fullSort() {
    array[edSelector.value - 1] = array[edSelector.value - 1].sort()
    updateDisplay()
}
function _numbersSort() {
    array[edSelector.value - 1] = array[edSelector.value - 1].sort(function(a, b){return a - b})
    updateDisplay()
}
function _reverseSort() {
    array[edSelector.value - 1] = array[edSelector.value - 1].reverse()
    updateDisplay()
}
function _defaultSort() {
    window.alert("LOL, I'm a filler button :3. Please, ignore me (T-T)")
}         
function _concat() {
    array[edSelector.value - 1] = array[0].concat(array[1], array[2]);
    updateDisplay()
}


let edSelector = document.getElementById('edit-selector')
const push = document.getElementById('ed-push')
const remove = document.getElementById('ed-remove')
const clear = document.getElementById('ed-clear')
const fullSort = document.getElementById('ed-full-sort')
const defaultSort = document.getElementById('ed-default-sort')
const numbersSort = document.getElementById('ed-sort-numbers')
const reverseSort = document.getElementById('ed-reverse-sort')
const removeDuplicates = document.getElementById('remove-dup')
const concat = document.getElementById('concat')

push.addEventListener('click', _push)
clear.addEventListener('click', _clear)
remove.addEventListener('click', _remove)
removeDuplicates.addEventListener('click', removeDup)
fullSort.addEventListener('click', _fullSort)
reverseSort.addEventListener('click', _reverseSort)
numbersSort.addEventListener('click', _numbersSort)
defaultSort.addEventListener('click', _defaultSort)
concat.addEventListener('click', _concat)
