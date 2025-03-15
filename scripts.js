const convertButton = document.querySelector('.convert-button')


function convertValue() {
    const inputCurrencyValue = document.querySelector('.input-currency').value
    console.log(inputCurrencyValue)

    const dolarToday = 5.2

    const convertedValue = inputCurrencyValue / dolarToday 
    console.log(convertedValue)
}

convertButton.addEventListener('click', convertValue )
