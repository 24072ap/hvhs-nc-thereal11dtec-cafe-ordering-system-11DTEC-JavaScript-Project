 
 
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
  OUTPUT.innerHTML = ("<h2><b>Receipt: " + "</b></h2><br>");
  OUTPUT.innerHTML += ("<b>Customer Name: </b>" + customerName + "<br>");
  OUTPUT.innerHTML += ("<b>You bought </b>" + orderItem + "<b> for</b> $" + itemPriceValue + "<br>");
  OUTPUT.innerHTML += ("<b>Total cost: </b>$" + itemPriceValue + "<br>");
  OUTPUT.innerHTML += ("<b>You gave us </b>$" + cashGiven + "<br>");
  OUTPUT.innerHTML += ("<b>Change: </b>$" + change + "<br>");
  }
}
function clearFields() {
    CUSTOMER_FIELD.value = "";
    ORDER_FIELD.value = "";
    CASH_FIELD.value = "";
    OUTPUT.innerHTML = "";
  }