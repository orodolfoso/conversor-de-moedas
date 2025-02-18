const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector('.currency-select')

function convertValues() {
    const inputConvertValue = document.querySelector('.input-currency').value 
    const currencyToConvert = document.querySelector('.currency-value-to-convert')
    const convertedcurrencyValue = document.querySelector('.currency-value')

    

   const dollarToday = 5.75
   const euroToday = 6.60

   inputConvertValue / dollarToday
   currencySelect / euroToday

   if(currencySelect.value == 'dolar') {
    convertedcurrencyValue.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(inputConvertValue / dollarToday)
}

   if(currencySelect.value == 'euro') {
    convertedcurrencyValue.innerHTML = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR'
    }).format(inputConvertValue / euroToday)

   }


    currencyToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputConvertValue)  
   
}

function changeCurrency() {
    const currancyName = document.getElementById('currency-name')
    const currancyImg = document.querySelector('.currency-img ')
    

    if(currencySelect.value == 'dolar') {
        currancyName.innerHTML = 'Dólar americano'
        currancyImg.src = './img/usa1.png'
    }

    if(currencySelect.value == 'euro') {
        currancyName.innerHTML = 'Euro'
        currancyImg.src = './img/euro1.png'
    }

    convertValues()

}

currencySelect.addEventListener('change',changeCurrency )
convertButton.addEventListener('click', convertValues)

