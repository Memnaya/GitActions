import freakFunction from "./freak.js";

const app = () => {
  const hihishka = document.querySelector('.hihishka');
  console.log(hihishka);
  hihishka.textContent = freakFunction();
}

app();
