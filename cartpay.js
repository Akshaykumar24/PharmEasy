console.log("Oye");

let arr = JSON.parse(localStorage.getItem("pharmcart"));
let car = document.getElementById("carter");
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i].pri;
}

if (arr.length == 0 || arr == null) {
  arr = [];

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
  app(arr);
  let but = document.getElementById("butcont");
  but.innerHTML = `
    <button id="coup">APPLY COUPON</button>
    <button id="proceed">Proceed To Check Out</button>
    <div id="fri">Free Delivery for Order Above 500</div>
    <h2>Order Summary</h2>
    <div id="det">
      <div class="ord">
        <p>Cart value</p>
        <p>20</p>
      </div>
      <div class="ord">
        <p>Delivery Charge</p>
        <p>20</p>
      </div>
      <hr />
      <div class="ord">
        <h3>Amount to be paid</h3>
        <h3>₹${Math.round(sum)}</h3>

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
        <button>
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
          <select class="qty">
            <option value="0">QTY</option>
            <option value="1">QTY 1</option>
            <option value="2">QTY 2</option>
            <option value="3">QTY 3</option>
            <option value="4">QTY 4</option>
            <option value="5">QTY 5</option>
            <option value="6">QTY 6</option>
            <option value="7">QTY 7</option>
            <option value="8">QTY 8</option>
            <option value="9">QTY 9</option>
            <option value="10">QTY Max 10</option>
          </select>
        </div>
        <div class="rig">
          <h5>${Math.round(arr[x].off * 100)}% OFF</h5>
          <span>MRP</span>
          <span class="mrp">${arr[x].mrp}</span>
          <span class="act">₹${arr[x].pri}*</span>
        </div>
      </div>
    </div>
  </div>
      `;

    div.setAttribute("class", "qtycard");
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
