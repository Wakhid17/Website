// DARK MODE

const toggle = document.getElementById("toggle-mode");

toggle.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

});

// AUTO STOCK

let stock = 20;

function buyProduct(){

  stock--;

  document.getElementById("stock").innerHTML =
  "Stok : " + stock;

  if(stock <= 5){

    alert("Stok hampir habis!");

  }

}

// AI RECOMMENDATION

const products = [

  "Vas Premium",
  "Teko Artisan",
  "Pot Tradisional",
  "Gerabah Rustic"

];

const recommendationBox =
document.getElementById("recommendation-box");

products.forEach(product => {

  const div = document.createElement("div");

  div.classList.add("dashboard-card");

  div.innerHTML = `

    <h3>${product}</h3>
    <p>Recommended for Export</p>

  `;

  recommendationBox.appendChild(div);

});

// BUTTONS

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {

  btn.addEventListener("mouseenter", () => {

    btn.style.transform = "scale(1.05)";

  });

  btn.addEventListener("mouseleave", () => {

    btn.style.transform = "scale(1)";

  });

});