const convertButton = document.querySelector('.convert-button')

function convertValues() {
    const inputConvertValue = document.querySelector('.input-currency').value 
    const currencyToConvert = document.querySelector('.currency-value-to-convert')
    const convertedcurrencyValue = document.querySelector('.currency-value')

   const dollarToday = 5.75

   const convertedValue = inputConvertValue / dollarToday

    console.log(convertedValue)

    currencyToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputConvertValue)
    
    convertedcurrencyValue.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(convertedValue)

   
}


convertButton.addEventListener('click', convertValues)

