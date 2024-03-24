
const cross = document.querySelector(".cross");
const popUp = document.querySelector(".pop-upp");
const submitBtn = document.querySelector(".submit");
const popupBtn = document.querySelector("#button");

cross.addEventListener("click", ()=> {
  popUp.classList.remove("visid");
})

submitBtn.addEventListener("click", ()=> {
  popUp.classList.remove("visid");
})

popupBtn.addEventListener("click", ()=> {
  popUp.classList.add("visid");
})


