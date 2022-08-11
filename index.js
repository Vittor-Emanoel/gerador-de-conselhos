const btn = document.querySelector("#btn-advice");
  btn.addEventListener("click", Advice);
      const adviceContent = document.querySelector(".content");
       const adviceNumber = document.querySelector(".advice-num");

      function Advice() {
        fetch("https://api.adviceslip.com/advice")
          .then((response) => {
            if(response.status == 200){
              return response.json();
            }else{
              alert('API com problemas!');
          }
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
