const inputPhone = document.querySelector("#phone");
const inputText = document.querySelector("#text");
const inputSubmit = document.querySelector("#submit");
const link = document.querySelector("#link");

inputPhone.addEventListener(`focus`, function () {
  inputPhone.style = "border-bottom: 3px solid #25d366";
  if (inputPhone.value == "") {
    inputPhone.value = "+55";
  }
});

inputPhone.addEventListener("focusout", function () {
  inputPhone.style = "border-bottom: 3px solid #fff";
  if (inputPhone.value == "+55") {
    inputPhone.value = "";
  } else if (inputPhone.value.length > 0 && inputPhone.value.length < 13) {
    alert("Verifique o número de telefone digitado.");
    inputPhone.style = "border-bottom: 3px solid #e53d30";
  }
});

inputText.addEventListener("focus", function () {
  inputText.style = "border-bottom: 3px solid #25d366";
});

inputText.addEventListener("focusout", function () {
  inputText.style = "border-bottom: 3px solid #fff";
});

inputSubmit.addEventListener("click", function () {
  var text;

  if (inputPhone.value != "") {
    if (inputText.value != "") {
      text = inputText.value
        .replaceAll(" ", "+")
        .replaceAll("?", "%3F")
        .replaceAll("!", "%21");
    } else {
      const saudacao = getSaudacao();
      text = `${saudacao}+%C3%89+da+THS+Inform%C3%A1tica%21+Tudo+bem%3F`;
    }
    link.target = "_blank";
    link.href = `https://api.whatsapp.com/send?phone=${inputPhone.value}&text=${text}`;
  } else {
    alert("Verifique o número de telefone digitado.");
    inputPhone.style = "border-bottom: 3px solid #e53d30";
  }
});

function getSaudacao() {
  const date = new Date();
  const hour = date.getHours();

  if (hour >= 5 && hour <= 11) {
    return "Bom dia!";
  } else if (hour >= 12 && hour <= 17) {
    return "Boa Tarde";
  } else {
    return "Boa Noite!";
  }
}
