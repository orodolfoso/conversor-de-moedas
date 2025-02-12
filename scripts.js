
const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector('.currency-select')

function inputConvertValue(){
    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    const currencyValueConverted = document.querySelector('.currency-value')

    console.log(currencySelect.value)

    if (currencySelect.value == 'dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
           }).format(inputCurrencyValue/ dolarToday)
    }

    if(currencySelect.value == 'euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('eu-US', {
            style: 'currency',
            currency: 'USD'
           }).format(inputCurrencyValue /  euroToday)
    }
    

    const dolarToday = 5.75
    const euroToday = 6.70

   currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
   }).format(inputCurrencyValue)


   
    
}

convertButton.addEventListener('click', inputConvertValue)

