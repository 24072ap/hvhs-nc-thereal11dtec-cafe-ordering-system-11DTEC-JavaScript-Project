 
 
 console.log("Running t05_JavaScript_and_HTML.js");
 
 const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
 OUTPUT.innerHTML = "<h2>Added by Javascript</h2>";

function start(){
//Menu items
const menuItems = ["latte", "cappucino", "mocha", "chocolate muffin", "chocolate pastry"]; //array
const itemPrice = [5, 5, 5, 5 ,5]; //array



  if (CASH_FIELD.value < 13 || CASH_FIELD.value > 99){
        OUTPUT.innerHTML = "You're not a good age<br>";
    }

  let orderItem = ORDER_FIELD.value.toLowerCase();
  alert("Order item: " + orderItem);
  let cashAvailable = CASH_FIELD.value;
  alert("Cash available: " + cashAvailable);
  alert("Size of array:" + menuItems.length);
  let itemIndex = menuItems.indexOf(orderItem);
  alert("Item index: " + itemIndex);
  alert("You have ordered: " + orderItem + " for $" + itemPrice[itemIndex] + ". You have $" + cashAvailable + " available.");


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