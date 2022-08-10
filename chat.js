const sarangHae = document.querySelector(".sarang_reply");
const sarangInput = document.querySelector(".sarang_respond_input");
const sarangForm = document.querySelector(".sarang_form");
const gitReply = document.querySelector(".git_reply");
const gitReplyTwo = document.querySelector(".git_reply_two");
const gitReplyThree = document.querySelector(".git_reply_three");
const gitReplyFour = document.querySelector(".git_reply_four");
const one = document.querySelector(".did_she_read");
const HIDDEN_CLASSNAME = "hidden";

// sarangInput.value = "사랑해";
const onSubmit = (event) => {
  event.preventDefault();
  console.log(sarangInput.value);
  if (sarangInput.value.includes("사랑")) {
    sarangHae.classList.remove(HIDDEN_CLASSNAME);

    sarangInput.value = "";
    setTimeout(() => {
      one.classList.add(HIDDEN_CLASSNAME);
      gitReply.classList.remove(HIDDEN_CLASSNAME);
    }, 3000);
    setTimeout(() => gitReplyTwo.classList.remove(HIDDEN_CLASSNAME), 4000);
    setTimeout(() => gitReplyThree.classList.remove(HIDDEN_CLASSNAME), 6000);
    setTimeout(() => gitReplyFour.classList.remove(HIDDEN_CLASSNAME), 10000);
  }
};
sarangForm.addEventListener("submit", onSubmit);
