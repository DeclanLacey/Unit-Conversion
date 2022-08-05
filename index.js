/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let resultOne = document.getElementById("meter-feet")
let resultTwo = document.getElementById("liters-gallons")
let resultThree = document.getElementById("kilograms-pounds")
const convertBtn = document.getElementById("convert-btn")
let input = document.getElementById("input-space")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    
     let inputValue = input.value
     
    

    resultOne.textContent = `${inputValue} meters = ${(inputValue * meterToFeet).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / meterToFeet).toFixed(3) }  meters `
     
    
    resultTwo.textContent = `${inputValue} liters = ${(inputValue * literToGallon).toFixed(3)} gallons | ${inputValue} Gallons = ${(inputValue / literToGallon).toFixed(3)} liters`
    
     resultThree.textContent = `${inputValue} kilograms = ${(inputValue * kiloToPound).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue / kiloToPound).toFixed(3)} kilograms`
})


