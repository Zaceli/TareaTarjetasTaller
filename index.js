/*function getColor() {
    var color = "#";
    var symbols = "0123456789abcdef";
    for (var i=0; i<6;i++){
        color=color + symbols[Math.floor(Math.random()*16)];
    }
    document.body.style.background =color;
    document.querySelector('generator').textContent = color;
}
const createCardNode = ()=>{
    const box = document.createElement("div")
    box.className = "box"
    const parrafo = document.createElement("p")
    parrafo.className = "descripcion"
    const text = document.createTextNode('Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.')
    parrafo.appendChild(text)

    const card = document.createElement("div")
    card.className = "card"
    
    card.appendChild(box)
    card.appendChild(parrafo)

    return card
}
const mountNode = document.querySelector("#appe")
const addCardButton = document.querySelector('button') 

const addCard=()=>{
    mountNode.appendChild(createCardNode())
}

addCardButton.addEventListener('click', addCard)
*/