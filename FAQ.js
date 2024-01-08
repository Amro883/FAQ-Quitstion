const buttons = document.querySelectorAll("button");
const answers = document.querySelectorAll(".answer");
const quit = document.querySelectorAll(".quit");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (button.className === "open") {
      button.classList.remove("open");
      answers[index].classList.remove("closeanswer");
      answers[index].classList.add("openanswer");
      button.innerHTML = "close";
      quit[index].classList.remove("openQuit");
      quit[index].classList.add("closeQuit");
    } else {
      button.classList.add("open");
      answers[index].classList.remove("openanswer");
      answers[index].classList.add("closeanswer");
      button.innerHTML = "open";
      quit[index].classList.remove("closeQuit");
      quit[index].classList.add("openQuit");
    }
  });
});

