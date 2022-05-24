//seletores:

const adviceContent = document.querySelector(".content");
const adviceNumber = document.querySelector(".advice-num");

const btn = document.querySelector("#btn-advice");

//evento de clique que aciona a função:

btn.addEventListener("click", Advice);

//função
function Advice() {
  fetch("	https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      const adviceNum = adviceData.slip.id;
      const adviceText = adviceData.slip.advice;

      adviceNumber.textContent = adviceNum;
      adviceContent.textContent = adviceText;
    })
    .catch((error) => {
      console.log(error);
    });
}

window.onload = () => {
  Advice();
};


/* ARROW FUNCTION VS FUNCTION 
    QUAL*/ 

