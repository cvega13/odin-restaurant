import MenuBurgers from "./MenuBurgers.jpg";

export function loadMenuPage() {
    const container = document.querySelector("#content");

    // Create Stock image
    let img = document.createElement("img");
    img.src = MenuBurgers;
    container.appendChild(img);

    // Menu Card
    const menuGrid = document.createElement("div");
    menuGrid.setAttribute("id", "menu");

    const barryBurger = document.createElement("div");
    barryBurger.classList.add("menuItem")
    barryBurger.textContent = "The Barry Burger";
    menuGrid.appendChild(barryBurger);

    const cheeseBurger = document.createElement("div");
    cheeseBurger.classList.add("menuItem")
    cheeseBurger.textContent = "CheeseBurger";
    menuGrid.appendChild(cheeseBurger);

    const baconCheeseBurger = document.createElement("div");
    baconCheeseBurger.classList.add("menuItem")
    baconCheeseBurger.textContent = "Bacon CheeseBurger";
    menuGrid.appendChild(baconCheeseBurger);

    const fries = document.createElement("div");
    fries.classList.add("menuItem")
    fries.textContent = "Fries";
    menuGrid.appendChild(fries);

    const onionRings = document.createElement("div");
    onionRings.classList.add("menuItem")
    onionRings.textContent = "Onion Rings";
    menuGrid.appendChild(onionRings);

    const hotWings = document.createElement("div");
    hotWings.classList.add("menuItem")
    hotWings.textContent = "Hot Wings";
    menuGrid.appendChild(hotWings);

    container.appendChild(menuGrid);
}