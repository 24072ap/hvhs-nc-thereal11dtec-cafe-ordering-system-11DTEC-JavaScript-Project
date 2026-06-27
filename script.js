 
 
 console.log("Running t05_JavaScript_and_HTML.js");
 
function start(){
//Menu items
const menudrink = ["Latte $5", "Cappucino $5", "Mocha $5"] //array
const itemPrice = [5, 5, 5];
const menufood = [ "Chocolate Muffin $4", "Chocolate Pastry $7"] //array2
const itemPrice2 = [4, 7];


  
  let shoppingChoice = SHOPPING_FIELD.value;
  shoppingArray.push(shoppingChoice);
  OUTPUT.innerHTML += "You have added: "+shoppingChoice+ "  to the list "+"<br> <br> <br><br>";

}

function ButtonClick(){
  OUTPUT.innerHTML += "These are the items on your shopping list:<br>";
  for(let i=0; i<shoppingArray.length; i++){
    OUTPUT.innerHTML += shoppingArray[i] + "<br>";
  }
 
 const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
 OUTPUT.innerHTML = "<h2>Added by Javascript</h2>";
}