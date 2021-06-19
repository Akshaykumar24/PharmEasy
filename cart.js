var pri = Math.floor(Math.random() * 3000);
var offer = Math.round(Math.random() * 0.3 * 100) / 100;
var mrp = Math.floor(pri / (1 - offer));

console.log(mrp, offer, pri);

let prod = JSON.parse(localStorage.getItem("showproduct"));
console.log(prod);

let img = document.getElementById("slide");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

let name = document.getElementById("tabname");
let company = document.getElementById("tabcompany");

let stock = document.getElementById("stock");

let actual = document.getElementById("actual");
let orig = document.getElementById("original");
let off = document.getElementById("taboff");

img.src = prod.imag;
img1.src = prod.img1;
img2.src = prod.img2;
img3.src = prod.img3;

name.textContent = prod.taga;
company.textContent = prod.company + " PVT LTD";

actual.textContent = `₹${prod.pri}*`;
orig.textContent = `₹${prod.mrp}`;
off.textContent = `${Math.round(prod.off * 100)}% OFF`;

if (prod.stock < 0.25) {
  stock.textContent = "Currently Unavailable, back in stock SOON";
  stock.style.color = "grey";
} else if (prod.stock < 0.5) {
  stock.textContent = `Only ${Math.ceil(
    prod.stock * 25
  )} Left In Stock. HURRY!`;
  stock.style.color = "red";
} else if (prod.stock > 0.75) {
  stock.textContent = "IN STOCK";
  stock.style.color = "green";
} else {
  stock.textContent = "Only Few Left ";
  stock.style.color = "blue";
}

function cartme() {
  console.log(prod);
  let arr = JSON.parse(localStorage.getItem("pharmcart"));
  if (arr == null) {
    arr = [];
    arr.push(prod);
  } else {
    arr = JSON.parse(localStorage.getItem("pharmcart"));
    var k = 0;
    for (i = 0; i < arr.length; i++) {
      var c = 0;
      for (key in prod) {
        if (arr[i][key] == prod[key]) {
          c++;
        }
      }
      if (c > 6) {
        k++;
        break;
      }
    }
    if (k > 0) {
      alert("Medicine exists in your cart");
      return;
    } else {
      arr.push(prod);

      //   window.location.href = "index.html";
    }
  }
  alert("Medicine Successfully Added to your cart");
  document.getElementById("carted").innerText = "Added to Cart";
  localStorage.setItem("pharmcart", JSON.stringify(arr));
}

let arr = JSON.parse(localStorage.getItem("pharmcart"));
console.log(arr.length);
let lang = 0;
if (arr == null || arr.length == 0) {
  lang = 0;
} else {
  lang = arr.length;
}
let sh = document.getElementById("showcart");
sh.textContent = `${lang} Items in cart`;
