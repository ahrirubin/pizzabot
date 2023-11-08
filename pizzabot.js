/* 
const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:
alert("Hey! Happy to serve your pizza. On our menu we have "
+ vegetarian +", " + hawaiian + " and " + pepperoni)
let orderName = prompt("Enter the name of the pizza you want to order today.")

function checkOrderName(orderName){
    if (orderName == "vegetarian" |"hawaiian" | "pepperoni") {
        return true;
    }
    return false;
}
function orderCost(orderQuantity){
    const orderTotal = 80 * orderQuantity
    return orderTotal
}
function cookingTime(orderQuantity){
    let orderTime = 0;
    if (orderQuantity < 3) {
        orderTime = 10;
        return orderTime
    }
    if (orderQuantity > 2 && orderQuantity < 6) {   
        orderTime = 15
        return orderTime
    }
    if (orderQuantity >= 6) {
        orderTime = 20;
        return orderTime
    }  
}

if (checkOrderName()){
    let orderQuantity = prompt("How many of " + orderName + " do you want?")
    alert("Great, I'll get started on your " + orderName + "right away, it will cost "
    + orderCost(orderQuantity) + "kr. The pizzas will take " + cookingTime(orderQuantity)
    + " minutes.")
}
else{
    // alert("Try again.")
}
 */

const orderTypes = ["vegetarian", "hawaiian", "pepperoni"]

const btn = document.getElementById('btn')
btn.addEventListener("click", completeOrder)
btn.addEventListener("click", function(event){event.preventDefault()})



function completeOrder(){
    const orderType = document.getElementById('orderType').value;
const orderNumber = document.getElementById('orderNumber').value;
document.getElementById('orderType').value=""
document.getElementById('orderNumber').value = ""
document.getElementById('errorMsg').innerHTML = ""
document.getElementById('completedOrder').innerHTML = ""
    if(checkOrderType(orderType)){
        
       return document.getElementById('completedOrder').innerHTML = "Great, I'll get started on your " + orderType + " right away, it will cost "
        + orderCost(orderNumber) + "kr. The pizzas will take " + cookingTime(orderNumber)
        + " minutes."
    }
    else{
       return document.getElementById('errorMsg').innerHTML = "Something went wrong, try again."

    }
}

function checkOrderType(orderType){
    if (orderTypes.includes(orderType)) {
        return true;
    }
    return false;
}

function orderCost(orderNumber){
    const orderTotal = 80 * orderNumber
    return orderTotal
}

function cookingTime(orderNumber){
    let orderTime = 0;
    if (orderNumber < 3) {
        orderTime = 10;
        return orderTime
    }
    if (orderNumber > 2 && orderNumber < 6) {   
        orderTime = 15
        return orderTime
    }
    if (orderNumber >= 6) {
        orderTime = 20;
        return orderTime
    }  
}
 
