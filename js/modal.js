export const modal = {
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
window.addEventListener ("keydown", handleClose)

function handleClose(event) {
  if (event.key === "Escape"){
    modal.close()
  }
}