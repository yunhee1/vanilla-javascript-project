const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const modalContainer = document.querySelector(".modal-container");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});

modal.addEventListener("click", e => {
  const evTarget = e.target
  if ( evTarget.classList.contains("modal-container") ) {
   return ;
  }
  else {
    modal.classList.remove("open-modal");}
})

closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});