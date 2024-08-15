import "./styles.css";
import { loadHomePage } from "./homePage";
import { loadAboutPage } from "./aboutPage";
import { loadMenuPage } from "./menuPage";

function buttonController() {
    function clearContent() {
        const content = document.querySelector("#content");
        while (content.firstChild) {
            content.removeChild(content.lastChild);
        }
    }

    const homeButton = document.querySelector("#homeButton");
    homeButton.addEventListener("click", () => {
        clearContent();
        loadHomePage();
    })
    
    const aboutButton = document.querySelector("#aboutButton");
    aboutButton.addEventListener("click", () => {
        clearContent();
        loadAboutPage();
    })
    
    const menuButton = document.querySelector("#menuButton");
    menuButton.addEventListener("click", () => {
        clearContent();
        loadMenuPage();
    })
}

buttonController();
loadHomePage();