
// api url
const url = "https://api.pokemontcg.io/v2/cards/?apikey=6ebdd64c-2643-44bf-a165-50c75b083ebd";
  
async function getData(url) {
    const response = await fetch(url);
    return response.json();
}
 

async function renderCards() {
    const images = [];
    
    await getData(url).then(data => {
      const cards = data.data;
  
      // Looping through the cards and accessing their properties
      cards.forEach(card => {
        images.push(card.images.large)
      });
    });
  
    const cardContainer = document.querySelector(".card-container");
  
    for (let i = 0; i < 31; i++) {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");
      const cardImg = document.createElement("img");
      cardDiv.setAttribute("data-index", i);
      cardImg.src = images[i];
      cardImg.alt = "rendered card";
      cardDiv.appendChild(cardImg);
      cardContainer.appendChild(cardDiv);
    }
}
  
document.addEventListener("DOMContentLoaded", function() {
  renderCards();
});
