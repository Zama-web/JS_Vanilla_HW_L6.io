let text        = document.querySelector('.content').innerText;
let searchInput = document.querySelector('.search');

searchInput.addEventListener('input', ()=> {
    const inputValue = searchInput.value;

    if (inputValue === '') {
        document.querySelector('.content').innerHTML = text
        return;
    }

    const regexp_1 = new RegExp(inputValue, 'gi');

    const regexp_2 = new RegExp(`\\b\\w*(${inputValue})\\w*\\b`, 'gi');


    let result = text
        .replace(regexp_2, function (a, group) {
            return `<span>${a}</span>`
        })
        .replace(regexp_1, function (a, group) {
            return `<b>${a}</b>`
        });

    document.querySelector('.content').innerHTML = result;

})
