import burgerImage from "./BurgersLineUp.jpg";

export function loadHomePage() {
    const container = document.querySelector("#content");

    // Create Resturant logo and stock image
    const restaurantLogo = document.createElement("div");
    restaurantLogo.setAttribute("id", "restaurantLogo");
    const logoName = document.createElement("p");
    logoName.textContent = "Barry B's Burgers";
    restaurantLogo.appendChild(logoName);
    container.appendChild(restaurantLogo);

    let img = document.createElement("img");
    img.src = burgerImage;
    container.appendChild(img);

    // Customer Testimony Card
    const testimonyCard = document.createElement("div");
    testimonyCard.classList.add("card");

    const testimonyTitle = document.createElement("p");
    testimonyTitle.textContent = "Testimony";
    testimonyCard.appendChild(testimonyTitle);

    const testimonyBody = document.createElement("p");
    testimonyBody.textContent = "Barry B's is the best burger joint in the Tri-State area! " + 
                "Their Wagyu patties are cooked to a juicy perfection and " + 
                "their wide selection of burger varities can suit the cravings " +
                "of even the pickiest of eaters. It's great family fun for " +
                "everyone!";
    testimonyBody.classList.add("cardBody");
    testimonyCard.appendChild(testimonyBody);

    const testimonyName = document.createElement("p");
    testimonyName.textContent = "Matthew Mizkif “WideHardo” Rinaudo";
    testimonyName.setAttribute("id", "customerName");
    testimonyCard.appendChild(testimonyName);

    container.appendChild(testimonyCard);

    // Hours Card
    const hoursCard = document.createElement("div");
    hoursCard.classList.add("card");

    const hoursTitle = document.createElement("p");
    hoursTitle.textContent = "Hours";
    hoursCard.appendChild(hoursTitle);
    const hoursList = document.createElement("ol");
    hoursList.classList.add("cardBody");

    const hoursSunday = document.createElement("li");
    hoursSunday.textContent = "Sunday: 8am - 8pm";
    hoursList.appendChild(hoursSunday);

    const hoursMonday = document.createElement("li");
    hoursMonday.textContent = "Monday: 6am - 6pm";
    hoursList.appendChild(hoursMonday);

    const hoursTuesday = document.createElement("li");
    hoursTuesday.textContent = "Tuesday: 6am - 6pm";
    hoursList.appendChild(hoursTuesday);

    const hoursWednesday = document.createElement("li");
    hoursWednesday.textContent = "Wednesday: 6am - 6pm";
    hoursList.appendChild(hoursWednesday);

    const hoursThursday = document.createElement("li");
    hoursThursday.textContent = "Thursday: 6am - 10pm";
    hoursList.appendChild(hoursThursday);

    const hoursFriday = document.createElement("li");
    hoursFriday.textContent = "Friday: 6am - 10pm";
    hoursList.appendChild(hoursFriday);

    const hoursSaturday = document.createElement("li");
    hoursSaturday.textContent = "Saturday: 8am - 10pm";
    hoursList.appendChild(hoursSaturday);

    hoursCard.appendChild(hoursList);
    container.appendChild(hoursCard);

    // Location Card
    const LocationCard = document.createElement("div");
    LocationCard.classList.add("card");

    const LocationTitle = document.createElement("p");
    LocationTitle.textContent = "Location";
    LocationCard.appendChild(LocationTitle);

    const LocationAddress = document.createElement("p");
    LocationAddress.textContent = "217 Wisteria Ave, Cherry Hill, NJ 08002";
    LocationAddress.classList.add("cardBody");
    LocationCard.appendChild(LocationAddress);

    container.appendChild(LocationCard);
}