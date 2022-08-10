const sarangHae = document.querySelector(".sarang_reply");
const sarangInput = document.querySelector(".sarang_respond_input");
const sarangForm = document.querySelector(".sarang_form");
const gitReply = document.querySelector(".git_reply");
const gitReplyTwo = document.querySelector(".git_reply_two");
const gitReplyThree = document.querySelector(".git_reply_three");
const gitReplyFour = document.querySelector(".git_reply_four");
const HIDDEN_CLASSNAME = "hidden";

// sarangInput.value = "사랑해";
const onSubmit = (event) => {
  event.preventDefault();
  console.log(sarangInput.value);
  if (sarangInput.value === "사랑해") {
    sarangHae.classList.remove("hidden");
    sarangInput.value = "";
    setTimeout(() => gitReply.classList.remove("hidden"), 3000);
    setTimeout(() => gitReplyTwo.classList.remove("hidden"), 4000);
    setTimeout(() => gitReplyThree.classList.remove("hidden"), 6000);
    setTimeout(() => gitReplyFour.classList.remove("hidden"), 10000);
  }
};
sarangForm.addEventListener("submit", onSubmit);
// sarangHae.classList.remove("hidden");
