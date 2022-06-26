const formElm = document.querySelector('form')
const nameInputElm = document.querySelector('.product-name')
const priceInputElm = document.querySelector('.product-price')
const listGroupElm = document.querySelector('.list-group')


// Form Submit / Getting Datas

formElm.addEventListener('submit', (f) => {
    f.preventDefault()
    // Recieving Input
    const {nameInput, priceInput} = receiveInput()
    // Validate Input
    const isError = validateInput(nameInput, priceInput) 
    if (!isError) {
        // Add Item to UI
        addItemToUI(nameInput, priceInput)
    }   
    console.log(isError);
})

// Single responsibility principle

function receiveInput() {
    const nameInput = nameInputElm.value
    const priceInput = priceInputElm.value
    return {
        nameInput,
        priceInput,
    }
}


// Validate Input
function validateInput(name, price) {
    let isError = false
    if (!name || name.length < 3) {
        isError = true
        console.log('Invalid Input')
    }
    if (!price || Number(price) <= 0) {
        isError = true
        console.log('Invalid Price')
    }    
    return isError
}


// Add Item to UI
function addItemToUI(name, price){
    const htmlElm = `<li class="list-group-item collection-item">
                        <strong>${name}</strong>- <span class="price">$${price}</span>
                        <i class="fa fa-trash float-right"></i>
                    </li>`
        listGroupElm.insertAdjacentHTML('afterbegin', htmlElm)
        nameInputElm.value = ''
        priceInputElm.value = ''
}

 