console.log("first_js");
let name = document.getElementById("username");
name.placeholder = "Enter Your name";

function sub() {
  let name = document.getElementById("name").value;
  let mobile = document.getElementById("mobile").value;
  let email = document.getElementById("email").value;

  let details = {
    name,
    mobile,
    email,
  };

  let arr = localStorage.getItem("details");
  if (name != "" && email != "" && mobile != "") {
    console.log("go");
    if (arr == null) {
      arr = [];
    } else {
      arr = JSON.parse(localStorage.getItem("details"));
    }
    console.log(arr);
    var k = 0;
    for (var i = 0; i < arr.length; i++) {
      var count = 0;

      for (key in details) {
        if (details[key] == arr[i][key]) {
          count++;
        } else {
          break;
        }
      }
      if (count == 3) {
        k++;
        break;
      }
    }
  }
  if (k > 0) {
    alert("Account already exists");
  } else {
    arr.push(details);
  }
  localStorage.setItem("details", JSON.stringify(arr));
}

function logout() {
  localStorage.removeItem("session");
  window.location.href = "index.html";
}

function savesess() {
  let name = document.getElementById("username").value;
  let arr = JSON.parse(localStorage.getItem("session"));
  console.log(name, arr[0]);
  arr[0].user = name;
  console.log(arr[0]);
  localStorage.setItem("session", JSON.stringify(arr));
}

function address() {
  let addr = JSON.parse(localStorage.getItem("addadd"));
  console.log(addr);
  let par = document.getElementById("address1");
  par.innerHTML = "";
  for (var i = 0; i < addr.length; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "card1");

    div.innerHTML = `
    <h3>Address ${i + 1}</h3>
<h4>Name : ${addr[i].name}</h4>
<h4>Number : ${addr[i].numa}</h4>
<p>Flat : ${addr[i].flat}</p>
<p>Street : ${addr[i].street}</p>
<h5>PINCODE : ${addr[i].pin}</h5>
    `;
    par.append(div);
  }
}
function saveadd() {
  console.log("add");
  let name = document.getElementsByName("Bill no")[0].value;
  let flat = document.getElementsByName("Flat number")[0].value;
  let street = document.getElementsByName("Street Number")[0].value;
  let pin = document.getElementsByName("Pincode")[0].value;
  let arr = JSON.parse(localStorage.getItem("session"));
  let numa = arr[0].num;
  console.log(name, flat, street, pin, numa);
  let addr = JSON.parse(localStorage.getItem("addadd"));
  if (addr == null) {
    addr = [];
  } else {
    addr = JSON.parse(localStorage.getItem("addadd"));
  }
  let adpro = {
    name,
    flat,
    street,
    pin,
    numa,
  };
  addr.push(adpro);
  localStorage.setItem("addadd", JSON.stringify(addr));
}

function showord() {
  console.log("Yeah");
  let par = document.getElementById("right_1");

  par.innerHTML = `
  <div class="right">
        <div><h3>MY ORDERS-HEALTHCARE</h3></div>
        <div class="cancel">
          <img
            src="https://assets.pharmeasy.in/web-assets/dist/025dc6fe.svg"
            alt="img"
          />

          <div>
            <p>USER</p>
            <span>Order Cancelled</span>
            <p>Dr.Odlin Digital Thermometer</p>

            <div class="reorder">
              <div>
                <p>Cancelled On</p>
                <p>23 june</p>
              </div>
              <div><p>Reorder</p></div>
            </div>
          </div>
        </div>
      </div>
      <div class="d_order">
        <select class="AllOrders">
          <option value="all">All Orders</option>
          <option value="Delivered Order">Deliverd Orders</option>
        </select>
      </div>
  `;
}
