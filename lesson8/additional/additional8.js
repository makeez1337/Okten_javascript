function reCall(startElem) {
    if (startElem.classList.value !== '') {
        console.log(startElem.classList.value);
    }
    if (startElem.children.length) {
        for (const element of startElem.children) {
            reCall(element);
        }
    }
}

reCall(document.body);
