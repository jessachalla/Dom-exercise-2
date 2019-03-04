function add(){
    let produceInput = document.getElementById("user-input").value;
    let ifFruit = document.getElementById("fruitButton").checked;
    let ifVeg = document.getElementById("vegButton").checked;
    let addToFruitList = document.getElementById("fruitList");
    let addToVegList = document.getElementById("vegList");

    if (ifFruit === true){
        let fruitItem = document.createElement("li");
        console.log({addToFruitList})
        fruitItem.innerText = produceInput;
        addToFruitList.appendChild(fruitItem);
        return;
    }

    if (ifVeg === true){
        let vegItem = document.createElement("li");
        vegItem.innerText = produceInput;
        addToVegList.appendChild(vegItem);
        return;
    }
}