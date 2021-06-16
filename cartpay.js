console.log("Oye");

let arr = JSON.parse(localStorage.getItem("pharmcart"));
let car = document.getElementById("carter");
var sum = 0;

if (arr == null) {
  arr = [];
  let car = document.getElementById("carter");
  car.innerHTML = `<div class="cart_box">
        <div class="cart_box1">
          <img
            src="https://assets.pharmeasy.in/web-assets/dist/8bfde66a.svg"
            alt=""
          />
          <p>Flat 15% off</p>
          <img
            src="https://assets.pharmeasy.in/web-assets/dist/adb9b646.svg"
            alt=""
          />
          <p>1 Lakh+Products</p>
          <img
            src="https://assets.pharmeasy.in/web-assets/dist/9279f530.svg"
            alt=""
          />
          <p>Easy Return</p>
        </div>
        <div class="cart_box2">
          <p>Search for Medicines/Healthcare Products</p>
        </div>
        <div class="cart_box3">
          <p>Select Pincode</p>
          <img
            src="https://image.flaticon.com/icons/png/128/25/25243.png"
            alt=""
          />
          <div></div>
          <input
            type="text"
            placeholder="e.g. Ecosprin, Telma or Colgate"
            class="Search"
          />
          <a class="search" href="#"
            ><img
              src="https://image.flaticon.com/icons/png/128/2089/2089805.png"
              alt=""
          /></a>
        </div>
      </div>
      <div class="cart_box_side">
        <h2>
          Your Cart is <br />
          Empty
        </h2>
        <img
          src="https://assets.pharmeasy.in/web-assets/dist/bb14593e.svg"
          alt=""
        />
      </div>`;
} else {
  for (var i = 0; i < arr.length; i++) {
    console.log(sum, arr[i].pri, arr[i].qty);
    sum += arr[i].pri * Number(arr[i].qty);
  }
  let del = 0;
  if (sum > 500) {
    del = 0;
  } else {
    del = 50;
  }
  app(arr);
  let but = document.getElementById("butcont");
  but.innerHTML = `
    <input id="coup" type="text" ondblclick="appli()" placeholder="APPLY COUPON">
     <div class="coups">
        <p>Flat 20% Off</p>
        <p>MASAI20</p>
      </div>
      <div class="coups">
        <p>Flat 25% Off</p>
        <p>MASAI25</p>
      </div>
      <div class="coups">
        <p>Flat 30% Off</p>
        <p>MASAI30</p>
      </div>
      <div class="coups">
        <p>Flat 50% Off</p>
        <p>MASAI50</p>
      </div>
    <button id="proceed" onclick="(location.href ='paynow.html')">Proceed To Pay</button>
    <div id="fri">Free Delivery for Order Above 500</div>
    <h2>Order Summary</h2>
    <div id="det">
      <div class="ord">
        <p>Cart value</p>
        <p id="cartvalue">₹${Math.round(sum)}</p>
      </div>
      <div class="ord">
        <p>Delivery Charge</p>
        <p id="del500">${del}</p>
      </div>
      <hr />
      <div class="ord">
        <h3>Amount to be paid</h3>
        <h3 id="totalcart">₹${Math.round(sum) + del}</h3>
      </div>
    </div>
    `;
}

function app(arr) {
  let car = document.getElementById("cont");
  car.innerHTML = "";
  for (var x = 0; x < arr.length; x++) {
    let div = document.createElement("div");

    div.innerHTML = `
      <div class="parent">
    <div class="fximg">
      <img
        src="${arr[x].imag}"
      />
    </div>
    <div class="fxtxt">
      <div class="fxtaga">
        <h2>${arr[x].taga}</h2>
        <button type="submit" onclick="dele(${x})">
          <img
            src="https://image.flaticon.com/icons/png/128/1214/1214428.png"
            alt="delete"
          />
        </button>
      </div>
      <div class="comp">
        <h4>${arr[x].company}</h4>
        <p class="del">
          Will be Delivered in ${Math.ceil(Math.random() * 7)} days
        </p>
      </div>
      <div class="both">
        <div class="lef">
          <select class="qty" id="sel${x}" onchange="selectme(${x})">
            <option value="1">QTY</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">Max 10</option>
          </select>
        </div>
        <div class="rig">
          <h5>${Math.round(arr[x].off * 100)}% OFF</h5>
          <span>MRP</span>
          <span class="mrp" id="mrp1${x}">${arr[x].mrp}</span>
          <span class="act" id="pri1${x}">₹${arr[x].pri}</span>
        </div>
      </div>
    </div>
  </div>
      `;
    console.log(document.getElementById(`sel${x}`));
    div.setAttribute("class", "qtycard");
    div.setAttribute("id", `card${x}`);
    // let name = document.createElement("h3");
    // name.innerHTML = `${arr[x].taga}`;

    // let company = document.createElement("h5");
    // company.innerHTML = `${arr[x].company}`;
    // let url = document.createElement("img");
    // url.src = arr[x].imag;

    // let mrp = document.createElement("h3");
    // mrp.innerHTML = `${arr[x].mrp}`;
    // let off = document.createElement("h3");
    // off.innerHTML = `${arr[x].off}`;
    // let pri = document.createElement("h3");
    // pri.innerHTML = `${arr[x].pri}`;

    // div.append(url, company, mrp, off, pri);
    car.append(div);
  }
}

function dele(x) {
  console.log("Yes", x);
  console.log(sum);
  let arr = JSON.parse(localStorage.getItem("pharmcart"));
  console.log(arr[x]);

  sum -= arr[x].pri;
  console.log(sum);
  if (sum > 500) {
    del = 0;
  } else {
    del = 50;
  }
  let cartv = document.getElementById("cartvalue");
  let totalcart = document.getElementById("totalcart");
  let deli = document.getElementById("del500");
  cartv.textContent = sum - arr[x].pri;
  deli.textContent = del;
  totalcart.textContent = sum - arr[x].pri;

  arr.splice(x, 1);
  console.log(arr.length);
  let card = document.getElementById(`card${x}`);
  card.remove();
  localStorage.setItem("pharmcart", JSON.stringify(arr));
  if (arr.length == 0) {
    localStorage.removeItem("pharmcart");
  }
  if (arr.length == null) {
    console.log("its comin");
    let car = document.getElementById("carter");
    car.innerHTML = `<div class="cart_box">
        <div class="cart_box1">
          <img
            src="https://assets.pharmeasy.in/web-assets/dist/8bfde66a.svg"
            alt=""
          />
          <p>Flat 15% off</p>
          <img
            src="https://assets.pharmeasy.in/web-assets/dist/adb9b646.svg"
            alt=""
          />
          <p>1 Lakh+Products</p>
          <img
            src="https://assets.pharmeasy.in/web-assets/dist/9279f530.svg"
            alt=""
          />
          <p>Easy Return</p>
        </div>
        <div class="cart_box2">
          <p>Search for Medicines/Healthcare Products</p>
        </div>
        <div class="cart_box3">
          <p>Select Pincode</p>
          <img
            src="https://image.flaticon.com/icons/png/128/25/25243.png"
            alt=""
          />
          <div></div>
          <input
            type="text"
            placeholder="e.g. Ecosprin, Telma or Colgate"
            class="Search"
          />
          <a class="search" href="#"
            ><img
              src="https://image.flaticon.com/icons/png/128/2089/2089805.png"
              alt=""
          /></a>
        </div>
      </div>
      <div class="cart_box_side">
        <h2>
          Your Cart is <br />
          Empty
        </h2>
        <img
          src="https://assets.pharmeasy.in/web-assets/dist/bb14593e.svg"
          alt=""
        />
      </div>`;
  }
}

function selectme(x) {
  let arr = JSON.parse(localStorage.getItem("pharmcart"));
  let it = document.getElementById(`sel${x}`).value;
  console.log(it);
  let mrp = document.getElementById(`mrp1${x}`);
  let pri = document.getElementById(`pri1${x}`);
  mrp.textContent = `${arr[x].mrp * it}`;
  pri.textContent = `₹${arr[x].pri * it}`;
  arr[x].qty = it;
  console.log(arr[x]);
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    console.log(sum, arr[i].pri, Number(arr[i].qty));
    sum += arr[i].pri * Number(arr[i].qty);
  }
  document.getElementById("cartvalue").innerText = `₹${sum}`;
  document.getElementById("totalcart").innerText = `₹${sum}`;
  localStorage.setItem("pharmcart", JSON.stringify(arr));
}

// Apply Coupons Here
let coop = 0;
function appli() {
  console.log("Hey ma");
  let coup = document.getElementById("coup").value;
  //console.log(coup);
  let div = document.createElement("div");

  let fin = document
    .getElementById("totalcart")
    .innerText.split("₹")
    .map(Number)[1];
  console.log(fin);
  if (coup == "MASAI20") {
    coop = fin * 0.8;
  }
  if (coup == "MASAI25") {
    coop = fin * 0.75;
  }
  if (coup == "MASAI30") {
    coop = fin * 0.7;
  }
  if (coup == "MASAI50") {
    coop = fin * 0.5;
  }
  div.innerHTML = `
  <hr/>
  <div class="ord">
        <h3>After applying Coupon</h3>
        <h3 id="totcoup">₹${Math.round(coop)}</h3>
      </div>
  `;
  let but = document.getElementById("butcont");
  but.append(div);
}
