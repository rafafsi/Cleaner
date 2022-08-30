const form = document.querySelector('form');
const input = document.querySelector('.input');
const playersList = document.querySelector('.players');
const display = document.querySelector('.display');
const result = document.querySelector('.result');
let mensalList = [];

const emojiList = {
    done: '✅',
    ball: '⚽️',
}    

const counter = () => {
    let len = mensalList.length;
    return `<h3>Total: <strong>${len}<strong></h3>`;
}

const displayResult = (mensalList) => {
    let html = mensalList.map(player => {
        return `<li>${player}</li>`;
    }).join('');

    result.innerHTML = counter();
    display.classList.add('display-click');
    playersList.innerHTML = html;
}

const pushing = (name) => {
    const findAndPush = (emoji, name) => {
        let idx = name.indexOf(emojiList[emoji]);
        let finalName = name.substr(0, (idx-1));
        mensalList.push(finalName);   
    }

    if(name.includes(emojiList.ball)) {
        findAndPush('ball', name);
    } else {
        findAndPush('done', name);
    }
}

const handleList = (list) => {
    let rows = list.split('\n');
    for (let row of rows) {
        let splitName = row.split(row[row.indexOf('.')]);
        let currentName = splitName[1].trim();
        if(currentName.includes(emojiList.done)) {
            pushing(currentName);
        }
    }
    displayResult(mensalList);
}


const getList = (e) => {
    e.preventDefault();

    try {
        let grossList = input.value;
        handleList(grossList);
    } catch (error) {
        alert("We got an error! Paste a valid list.");
        console.log(error)
    }
}

form.addEventListener('submit', getList);




