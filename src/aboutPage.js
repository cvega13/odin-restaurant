import BarryB from "./BarryB.jpg";

export function loadAboutPage() {
    const container = document.querySelector("#content");

    // Create Stock image
    let img = document.createElement("img");
    img.src = BarryB;
    container.appendChild(img);

    // About Us Card
    const aboutCard = document.createElement("div");
    aboutCard.classList.add("card");

    const aboutTitle = document.createElement("p");
    aboutTitle.textContent = "About";
    aboutCard.appendChild(aboutTitle);

    const aboutBody = document.createElement("p");
    aboutBody.textContent = "Barry B's is the best burger joint in the Tri-State area! " + 
                "Their Wagyu patties are cooked to a juicy perfection and " + 
                "their wide selection of burger varities can suit the cravings " +
                "of even the pickiest of eaters. It's great family fun for " +
                "everyone!";
    aboutBody.classList.add("cardBody");
    aboutCard.appendChild(aboutBody);

    container.appendChild(aboutCard);
}