const formElm = document.querySelector('form')
const nameInputElm = document.querySelector('.product-name')
const priceInputElm = document.querySelector('.product-price')

// Form Submit / Getting Datas

formElm.addEventListener('submit', (f) => {
    f.preventDefault()
    console.log(nameInputElm.value, priceInputElm.value);
    console.log(f);
})




 