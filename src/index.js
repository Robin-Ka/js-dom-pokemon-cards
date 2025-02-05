var cards = document.getElementById("cardList");

function main(){
    for (let i = 0; i < data.length; i++){
        var card = document.createElement("li");
        card.classList.add("card");

        var pokName = document.createElement("h2");
        pokName.classList.add("card--title");
        pokName.textContent = data[i].name;
        card.appendChild(pokName);

        var image = document.createElement("img");
        image.classList.add("card--img");
        image.width = 256;
        image.src = data[i].sprites.front_default;
        card.appendChild(image);

        var stats = document.createElement("ul");
        stats.classList.add("card--text");
        for (let j = 0; j < data[i].stats.length; j++){
            var stat = document.createElement("li");
            stat.classList.add("stat--text");
            stat.textContent = data[i].stats[j].stat.name.toUpperCase() + ": " + data[i].stats[j].base_stat;
            stats.appendChild(stat);
        }
        card.appendChild(stats);

        cards.appendChild(card);
    }    

}
main()