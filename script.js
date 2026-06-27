 
 
 console.log("Running t05_JavaScript_and_HTML.js");
 
 const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

function start(){
//Menu items
const menuItems = ["latte", "cappucino", "mocha", "chocolate muffin", "chocolate pastry"]; //array
const itemPrice = [5, 5, 5, 5 ,7]; //array

  let customerName = CUSTOMER_FIELD.value;
  let orderItem = ORDER_FIELD.value.toLowerCase();
  let cashAvailable = CASH_FIELD.value;
  let itemIndex = menuItems.indexOf(orderItem);
  let itemPriceValue = itemPrice[itemIndex];
  let cashGiven = CASH_FIELD.value;
  let change = cashGiven - itemPriceValue;
  if (cashGiven < itemPriceValue){
        OUTPUT.innerHTML = "You don't have enough money<br>";
  }
  else {
  OUTPUT.innerHTML += ("<p>Customer Name: " + customerName + "</p>");
  OUTPUT.innerHTML += ("<p>You bought " + orderItem + " for $" + itemPriceValue + "</p>");
  OUTPUT.innerHTML += ("<p>Total cost: " + itemPriceValue + "</p>");
  OUTPUT.innerHTML += ("<p>You gave us " + cashGiven + "</p>");
  OUTPUT.innerHTML += ("<p>Change: $" + change + "</p>" );
  }


  let shoppingChoice = SHOPPING_FIELD.value;
  shoppingArray.push(shoppingChoice);
  OUTPUT.innerHTML += "You have added: "+shoppingChoice+ "  to the list "+"<br> <br> <br><br>";

}

function ButtonClick(){
  OUTPUT.innerHTML += "These are the items on your shopping list:<br>";
  for(let i=0; i<shoppingArray.length; i++){
    OUTPUT.innerHTML += shoppingArray[i] + "<br>";
  }
 

}