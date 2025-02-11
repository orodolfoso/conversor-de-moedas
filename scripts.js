
const convertButton = document.querySelector('.convert-button')

function convertValue() {
    const inputConvertValue = document.querySelector('.input-currency').value 
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    const currencyValueconverted = document.querySelector('.currency-value')


    const dolarToday = 5.75
    const convertedValue = inputConvertValue / dolarToday

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputConvertValue)


    currencyValueconverted.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(convertedValue)
}

convertButton.addEventListener('click', convertValue)