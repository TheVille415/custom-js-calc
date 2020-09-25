const display = document.querySelector('#display')
const total = document.querySelector('#total')
const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')
const peopleInput = document.querySelector('#people')



function calculateTip() {
    const billValue = parseInt(billInput.value) 
    const tipValue = parseInt(tipInput.value)
    const peopleValue = parseInt(peopleInput.value)
    
    const tipAmount = ((billValue * tipValue) / 100) / peopleValue
    const totalAmount = parseInt(billValue) + ((billValue * tipValue) / 100)

    console.log(tipAmount)
    console.log(totalAmount)
    
    display.innerHTML = tipAmount.toFixed(2)
    total.innerHTML = totalAmount.toFixed(2)
    
}

calculateTip()

billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)
peopleInput.addEventListener('input', calculateTip)
