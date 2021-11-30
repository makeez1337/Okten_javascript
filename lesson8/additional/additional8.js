let emptyArr = [];

function reCall(startElem) {
    if (startElem.classList.value !== '') {
        emptyArr.push(startElem.classList.value)
    }
    if (startElem.children.length) {
        for (const element of startElem.children) {
            reCall(element);
        }
    }
}

reCall(document.body)
console.log(emptyArr.join(' ').split(' '));
