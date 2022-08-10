const sarangHae = document.querySelector(".sarang_reply");
const sarnagInput = document.querySelector(".sarang_respond_input");
const HIDDEN_CLASSNAME = "hidden";

const onSubmit = (event) => {
  event.preventDefault();
  console.log(sarangInput.value);
  if (sarnagInput.value === "사랑해") {
    sarangHae.classList.remove("hidden");
  }
};
sarnagInput.addEventListener("submit", onSubmit);
// sarangHae.classList.remove("hidden");
