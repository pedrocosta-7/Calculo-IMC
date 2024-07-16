const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")
/*
const modalWrapper = document.querySelector(".modalWrapper")
const modalMessage = document.querySelector(".modal span")
const modalBtnClose = document.querySelector(".close")
*/

const modal = {
      Wrapper : document.querySelector(".modalWrapper"),
      Message : document.querySelector(".modal span"),
      BtnClose : document.querySelector(".close"),
      
 open(){
    modal.Wrapper.classList.add("open")
 },
 close(){
    modal.Wrapper.classList.remove("open")
 }
}

form.onsubmit = handleSubmit

function handleSubmit(event) {
    event.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value
    const result = IMC(weight, height)
    const message = `Seu imc é de ${result}`
    
    modal.Message.innerText = message

    modal.open()
}
function IMC(weight, height){
    return (weight / ((height / 100) ** 2)).toFixed(2)
}
modal.BtnClose.addEventListener("click", function(){
    modal.close()
})

