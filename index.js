// add event listener to the data
let serial =0;
document.getElementById("first-card").addEventListener("click",function(){
    // Get the data from html using id
    this.setAttribute("disabled",true);
    serial+=1;
    const productName = document.getElementById("first-name").innerText;
   const productPrice = document.getElementById("first-product-price").innerText;
   const productQuantity = document.getElementById("first-product-quantity").innerText;
//    console.log(productName,productPrice,productQuantity);
    // multiplication total price 
   const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
   displayData(productName,productPrice,productQuantity,priceTotal);
   
}) ;

// using event object from browser...
const secondButton = document.getElementById("second-card")
document.getElementById("second-card").addEventListener("click",function(e){
    this.setAttribute("disabled",true);
    serial+=1;
    // console.log(e.target.parentNode.parentNode.children[0].innerText);
    const pName = e.target.parentNode.parentNode.children[0].innerText;
    const pPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
   const sumTotal = parseInt(pPrice) + parseInt(pQuantity);
//    console.log(sumTotal);
 displayData(pName,pPrice,pQuantity,sumTotal);

})
// Geting data from third from html using id
document.getElementById("third-card").addEventListener("click",function(){
    // Get the data from html using id
    this.setAttribute("disabled",true);
    serial+=1;
    const productName = document.getElementById("third-name").innerText;
   const productPrice = document.getElementById("third-price").innerText;
   const productQuantity = document.getElementById("third-quantity").innerText;
//    console.log(productName,productPrice,productQuantity);
    // multiplication total price 
   const priceTotal = parseInt(productPrice) - parseInt(productQuantity);
   displayData(productName,productPrice,productQuantity,priceTotal);
   
}) ;
// getting data from thml using id 4th 
document.getElementById("four-card").addEventListener("click",function(){
    // Get the data from html using id
    this.setAttribute("disabled",true);
    serial+=1;
    const productName = document.getElementById("four-name").innerText;
   const productPrice = document.getElementById("four-price").innerText;
   const productQuantity = document.getElementById("four-quantity").innerText;
//    console.log(productName,productPrice,productQuantity);
    // multiplication total price 
   const priceTotal = parseInt(productPrice) - parseInt(productQuantity);
   displayData(productName,productPrice,productQuantity,priceTotal);
   
}) ;

// getting data from html using id where has input field
document.getElementById("last-card").addEventListener("click",function(e){
    serial+=1;
    const pName = document.getElementById("last-title").innerText;
    const priceElementField = document.getElementById("last-price");
    const priceElement = parseInt(priceElementField.value);
    const quantityElementField= document.getElementById("last-quantity");
    const quantityElement = parseInt(quantityElementField.value);
    const perProductPrice = priceElement / quantityElement;
    displayData(pName,priceElement,quantityElement,perProductPrice);
    this.setAttribute("disabled",true);
    priceElementField.value = '';
    quantityElementField.value = '';
})

  
// common function to display data


function displayData(nameOfP,priceOfP,quantityOfP,resultP) {
    // console.log("function call");
    // show the data 
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");

    tr.innerHTML = `
    <td>${serial}</td>
    <td>${nameOfP}</td>
    <td>${priceOfP}</td>
    <td>${quantityOfP}</td>
    <td>${resultP}</td>
    `;
    container.appendChild(tr);
} 