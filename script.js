const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
  
function start(){
 const SHOPPING_FORM = document.getElementById("welcomeForm");
  if (SHOPPING_FORM.checkValidity()=== false){
      OUTPUT.innerHTML = "Please fill out all fields correctly. <br>";
  } 
  else {
  //Menu items
  const menuItems = ["latte", "cappucino", "mocha", "chocolate muffin", "chocolate pastry"]; //array
  //price of each item in the same order as the menuItems array
  const itemPrice = [5, 5, 5, 5 ,7]; 
  //Get the values from the form fields
  let customerName = CUSTOMER_FIELD.value;
  let orderItem = ORDER_FIELD.value.toLowerCase();
  let cashAvailable = CASH_FIELD.value;
  var itemIndex;
  var itemFound = false;
  for (let i = 0; i < menuItems.length; i++) {
    if (orderItem === menuItems[i]) {
      itemIndex = i;
      itemFound = true;
      break;
    }
  }
  let itemPriceValue = itemPrice[itemIndex];
  let cashGiven = CASH_FIELD.value;
  let change = cashGiven - itemPriceValue;
  //Check if cash given is less than the item price and display appropriate message
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
}
function clearFields() {
    CUSTOMER_FIELD.value = "";
    ORDER_FIELD.value = "";
    CASH_FIELD.value = "";
    OUTPUT.innerHTML = "";
}