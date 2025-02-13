
const convertButton = document.querySelector('.convert-button')


function convertValues() {
    const inputToConvert = document.querySelector('.input-currency').value 
    const converteCurrencyValue = document.querySelector('.currency-value-to-convert')
    const convertedValue = document.querySelector('.currency-value')

    const dolarToday = 5.75

    const currencyConvertValue = inputToConvert / dolarToday

    converteCurrencyValue.innerHTML =  new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputToConvert)

    convertedValue.innerHTML =   new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(currencyConvertValue)
}



convertButton.addEventListener('click', inputToConvert )

