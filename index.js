document.getElementById("first-card").addEventListener("click",function(){
    const productName = document.getElementById("first-name").innerText;
   const productPrice = document.getElementById("first-product-price").innerText;
   const productQuantity = document.getElementById("first-product-quantity").innerText;
   const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${1}</td>
    
    `
   console.log(productName,productPrice,productQuantity);
})