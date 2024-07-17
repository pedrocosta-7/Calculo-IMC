import { modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calculateIMC } from "./utils.js"
import { notAnumber } from "./utils.js"

const input = document.querySelector("input")
const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")
/*
const modalWrapper = document.querySelector(".modalWrapper")
const modalMessage = document.querySelector(".modal span")
const modalBtnClose = document.querySelector(".close")
*/


form.onsubmit = handleSubmit


function handleSubmit(event) {
    event.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value
     const heightOrWeightIsNotANumber = notAnumber(height) || notAnumber(weight)

     if(heightOrWeightIsNotANumber) {
        AlertError.open()
        return
     }
    AlertError.close()
    
    const result = calculateIMC(weight, height)
    
    displayResultMessage(result)

}

modal.BtnClose.addEventListener("click", function(){
    modal.close()
})
function displayResultMessage(result){
    const message = `Seu imc é de ${result}`
    
    modal.Message.innerText = message

    modal.open()
}


input.oninput = closeError

    


