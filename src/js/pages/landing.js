const landingMain = document.getElementById("container");
import paragraph from "../components/paragraph.js";
import img from "../components/image.js";
import title from "../components/titre.js";
import button from "../components/button.js";

landingMain.innerHTML =
  title("Ceci est le titre des paragraphes") +
  paragraph("Salut") +
  paragraph("les") +
  paragraph("Amis") +
  title("Ceci est le titre des images") +
  img('src="../../assets/img/chicken-1618459_1280.jpg"') +
  img('src="../../assets/img/dak-bokkeumtang-749365_1280.jpg"') +
  button("Valider", "submit", "login-button");


  fetch('https://chezbobo.onrender.com/products', {
    method: 'GET'
  })
    .then((result) => {
        return result.json()
    })
    .then((javascript) => {
        console.log('mes données', javascript);
    })