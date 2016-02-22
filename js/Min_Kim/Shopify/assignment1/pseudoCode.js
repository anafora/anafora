
document.addEventListener("DOMContentLoaded", init);

function init() {
    var jq = document.createElement("script");
    jq.addEventListener("load", loadCount);
    jq.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js");
    document.querySelector("head").appendChild(jq);
}
//upload jQuery library

function loadCount() {
    this.count = 0;
    this.count++;

    if(this.count === 1) {
        callAJAX("http://shopicruit.myshopify.com/products.json");
    }
}

function callAJAX(url) {

    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", url, false);
    Httpreq.send(null);

    window.shopifyData = JSON.parse(Httpreq.responseText);

    if (shopifyData) {
        alert("!");
        //sortOut();
        collectItems();
    } else {
        alert("no data");
    }
}
//
//function sortOut() {
//    var pants
//    window.productsByType =
//}

function collectItems() {

    window.product_types = [];

    for(var i = 0; i < shopifyData.products.length; i++) {
        var name = shopifyData.products[i].product_type.toString();

        if(product_types.indexOf(name) === -1) {
            product_types.push(name);
        }
    }


    console.log(product_types);
    console.log(product_types.parse());

    // Done: make an array that stores all the names of the 'product_type's
    // make an array that sorts out products by product_types.
    var tempArr = shopifyData.products;
    console.log(tempArr);

    window.keyboards = tempArr.filter(function(obj) {
        return obj.product_type === 'Keyboard';
    });

    window.computers = tempArr.filter(function(obj) {
        return obj.product_type === 'Computer';
    });

    console.log(keyboards);
    console.log(computers);

    calWeights();
}

// document.onload function, if the first page, it displays items in a certain format.
//

function calWeights() {
    var maxWeight = 100000;
    var keyboardWeight = 0, computerWeight = 0, keyboardPrice = 0, computerPrice = 0;

    if (keyboardWeight + computerWeight <= maxWeight) {

        window.cWeightHolder = [];
        window.kWeightHolder = [];

        for (var i = 0; i<keyboards.length; i++) {
            var keyboardFixed = keyboards[i];
            var id = keyboards[i].id;
            var handle = keyboards[i].handle;
            var productType = keyboards[i].product_type;
            for (var j = 0; j<keyboardFixed.variants.length; j++) {

                if (keyboardFixed.variants[j].available === true) {

                    item = {};
                    item.id = id;
                    item.handle = handle;
                    item.product_type = productType;
                    item.color = keyboardFixed.variants[j].title;
                    item.grams = keyboardFixed.variants[j].grams;
                    item.price = keyboardFixed.variants[j].price;
                    kWeightHolder.push(item);

                    if (keyboardWeight + computerWeight <=maxWeight) {
                        keyboardWeight += keyboardFixed.variants[j].grams;
                        keyboardPrice += parseInt(keyboardFixed.variants[j].price);
                        console.log(keyboardPrice);
                    }
                }

            }
        }

        for (var i = 0; i<computers.length; i++) {
            var computerFixed = computers[i];
            var id = computers[i].id;
            var handle = computers[i].handle;
            var productType = computers[i].product_type;
            for (var j = 0; j<computerFixed.variants.length; j++) {

                if (computerFixed.variants[j].available === true) {

                    item = {};
                    item.id = id;
                    item.handle = handle;
                    item.product_type = productType;
                    item.color = computerFixed.variants[j].title;
                    item.grams = computerFixed.variants[j].grams;
                    item.price = computerFixed.variants[j].price;
                    cWeightHolder.push(item);

                    if (keyboardWeight + computerWeight <=maxWeight) {
                        computerWeight += computerFixed.variants[j].grams;
                        computerPrice += parseInt(computerFixed.variants[j].price);
                        console.log(computerPrice);

                    }

                }

            }
        }

        //return calculate(keyboardWeight, computerWeight, maxWeight);
    }

    document.body.innerHTML += "The total Price is " + (keyboardPrice + computerPrice);
}

function qunatityButton(ev) {
    var className = ev.target.className;

}

function displayItems(type) {

}