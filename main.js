const formElm = document.querySelector('form')
const nameInputElm = document.querySelector('.product-name')
const priceInputElm = document.querySelector('.product-price')

// Form Submit
formElm.addEventListener('submit', (f) => {
    f.preventDefault()
    console.log(f);
})




 