const convertButton = document.querySelector(".convert-button")

function convertValues () {
    const inputCurrencyValue = document.querySelector(".input-currency").value 

    const dollarToday = 5.77

    const convertValues = inputCurrencyValue / dollarToday

    console.log(convertValues)
}

convertButton.addEventListener("click", convertValues)