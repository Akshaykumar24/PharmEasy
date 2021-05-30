console.log("hello");
//array of Images
var imgarr = [
  "https://cdn01.pharmeasy.in/dam/products_otc/329404/depura-kids-400-vit-d-nano-vitamin-drops-bottle-of-15-ml-1-1597363349.jpg?dim=200x0&dpr=1.25&q=100",
  "https://cdn01.pharmeasy.in/dam/products_otc/V36951/babychakra-hand-sanitizer-bottle-of-50-ml-2-1613733042.jpg?dim=200x0&dpr=1.25&q=100",
  "https://cdn01.pharmeasy.in/dam/products_otc/022290/becozym-c-forte-vitamin-b-complex-biotin-vitamin-c-strip-of-15-tablets-2-1605104971.jpg?dim=200x0&dpr=1.25&q=100",
  "https://cdn01.pharmeasy.in/dam/products_otc/I40119/dettol-ph-balanced-skincare-handwash-packet-of-175-ml-2-1610439760.jpg?dim=200x0&dpr=1.25&q=100",
];

//array of brands, medicine names
var tagarr = [
  "Dettol",
  "Kapiva",
  "Apollo",
  "Thor",
  "Mjiolnir",
  "Is this even a Medicine",
];
console.log(
  imgarr[Math.floor(Math.random() * imgarr.length)],
  tagarr[Math.floor(Math.random() * tagarr.length)],
  Math.floor(Math.random() * 3000)
);
//main element in which to be ppulated
var cont = document.getElementById("jav");
//function to generate n number of products
function loop(f) {
  cont.innerHTML = "";
  for (var i = 1; i <= 35; i++) {
    f(i);
  }
}
loop(run);

//!!!!!!IMPORTANT!!!!!!!!
function run(x) {
  var box = document.createElement("div");
  box.setAttribute("class", "box");
  box.setAttribute("id", `boxid${x}`);
  var imag = imgarr[Math.floor(Math.random() * imgarr.length)];
  var taga = tagarr[Math.floor(Math.random() * tagarr.length)];
  var pri = Math.floor(Math.random() * 3000);
  box.innerHTML = `
    <img src="${imag}" class="boximg"/>
    <h3 id="tag${x}" class="boxtag">${taga}</h3>
    <h3 id="price${x}" class="boxprice">₹${pri} Only</h3>
    `;

  cont.append(box);
}

//console.log(document.getElementById("sort").value);

//function to generate and sort the products LOW TO HIGH
function lowa() {
  cont.innerHTML = "";
  var pro = [];
  for (var h = 0; h < 30; h++) {
    pro.push(Math.floor(Math.random() * 3000));
  }

  pro.sort(function (a, b) {
    return a - b;
  });
  for (var c = 0; c < pro.length; c++) {
    var box = document.createElement("div");
    box.setAttribute("class", "box");
    box.setAttribute("id", `boxid${c}`);
    var imag = imgarr[Math.floor(Math.random() * imgarr.length)];
    var taga = tagarr[Math.floor(Math.random() * tagarr.length)];

    box.innerHTML = `
      <img src="${imag}" class="boximg"/>
      <h3 id="tag${c}" class="boxtag">${taga}</h3>
      <h3 id="price${c}" class="boxprice">₹${pro[c]} Only</h3>
      `;

    cont.append(box);
  }
}

//function to generate and sort the products HIGH TO LOW

function higha() {
  cont.innerHTML = "";
  var pro = [];
  for (var h = 0; h < 30; h++) {
    pro.push(Math.floor(Math.random() * 3000));
  }

  pro.sort(function (a, b) {
    return b - a;
  });
  for (var c = 0; c < pro.length; c++) {
    var box = document.createElement("div");
    box.setAttribute("class", "box");
    box.setAttribute("id", `boxid${c}`);
    var imag = imgarr[Math.floor(Math.random() * imgarr.length)];
    var taga = tagarr[Math.floor(Math.random() * tagarr.length)];

    box.innerHTML = `
      <img src="${imag}" class="boximg"/>
      <h3 id="tag${c}" class="boxtag">${taga}</h3>
      <h3 id="price${c}" class="boxprice">₹${pro[c]} Only</h3>
      `;

    cont.append(box);
  }
}
//document.getElementById("sort").addEventListener("change", lowa);

//function to get the value from selected option from SELECT LIST

var doc = document.getElementById("sort");
doc.addEventListener("click", mai);
var sortcnt = 0;
function mai() {
  var doc = document.getElementById("sort");
  sortcnt++;
  if (sortcnt % 2 == 0) {
    if (doc.value == "low") {
      //console.log("fuck yeah");
      lowa();
    }
    if (doc.value == "high") {
      //console.log("higher")
      higha();
    }
    if (doc.value == "popu") {
      loop(run);
    }
  }
}

var check = document.getElementById("low");
//check.addEventListener("true", chelow);

//When the Price range is BELOW 500 Rs

function chelow() {
  var check = document.getElementById("low");
  var doc = document.getElementById("sort");
  if (doc.value == "popu") {
    cont.innerHTML = "";
    var pro = [];

    for (var h = 0; h < 30; h++) {
      pro.push(Math.floor(Math.random() * 500));
    }

    for (var c = 0; c < pro.length; c++) {
      var box = document.createElement("div");
      box.setAttribute("class", "box");
      box.setAttribute("id", `boxid${c}`);
      var imag = imgarr[Math.floor(Math.random() * imgarr.length)];
      var taga = tagarr[Math.floor(Math.random() * tagarr.length)];

      box.innerHTML = `
      <img src="${imag}" class="boximg"/>
      <h3 id="tag${c}" class="boxtag">${taga}</h3>
      <h3 id="price${c}" class="boxprice">₹${pro[c]} Only</h3>
      `;

      cont.append(box);
    }
  }
  if (doc.value == "low") {
    cont.innerHTML = "";
    var pro = [];

    for (var h = 0; h < 30; h++) {
      pro.push(Math.floor(Math.random() * 500));
    }

    pro.sort(function (x, y) {
      return x - y;
    });
    for (var c = 0; c < pro.length; c++) {
      var box = document.createElement("div");
      box.setAttribute("class", "box");
      box.setAttribute("id", `boxid${c}`);
      var imag = imgarr[Math.floor(Math.random() * imgarr.length)];
      var taga = tagarr[Math.floor(Math.random() * tagarr.length)];

      box.innerHTML = `
      <img src="${imag}" class="boximg"/>
      <h3 id="tag${c}" class="boxtag">${taga}</h3>
      <h3 id="price${c}" class="boxprice">₹${pro[c]} Only</h3>
      `;

      cont.append(box);
    }
  }
  if (doc.value == "high") {
    cont.innerHTML = "";
    var pro = [];

    for (var h = 0; h < 30; h++) {
      pro.push(Math.floor(Math.random() * 500));
    }

    pro.sort(function (x, y) {
      return y - x;
    });
    for (var c = 0; c < pro.length; c++) {
      var box = document.createElement("div");
      box.setAttribute("class", "box");
      box.setAttribute("id", `boxid${c}`);
      var imag = imgarr[Math.floor(Math.random() * imgarr.length)];
      var taga = tagarr[Math.floor(Math.random() * tagarr.length)];

      box.innerHTML = `
      <img src="${imag}" class="boximg"/>
      <h3 id="tag${c}" class="boxtag">${taga}</h3>
      <h3 id="price${c}" class="boxprice">₹${pro[c]} Only</h3>
      `;

      cont.append(box);
    }
  }
}

//When the Price range is Between 500 Rs and 1000 Rs

function chebas() {
  var check = document.getElementById("low");
  var doc = document.getElementById("sort");
  if (doc.value == "popu") {
    cont.innerHTML = "";
    var pro = [];

    for (var h = 0; h < 30; h++) {
      pro.push(500 + Math.floor(Math.random() * 500));
    }

    for (var c = 0; c < pro.length; c++) {
      var box = document.createElement("div");
      box.setAttribute("class", "box");
      box.setAttribute("id", `boxid${c}`);
      var imag = imgarr[Math.floor(Math.random() * imgarr.length)];
      var taga = tagarr[Math.floor(Math.random() * tagarr.length)];

      box.innerHTML = `
      <img src="${imag}" class="boximg"/>
      <h3 id="tag${c}" class="boxtag">${taga}</h3>
      <h3 id="price${c}" class="boxprice">₹${pro[c]} Only</h3>
      `;

      cont.append(box);
    }
  }
  if (doc.value == "low") {
    cont.innerHTML = "";
    var pro = [];

    for (var h = 0; h < 30; h++) {
      pro.push(500 + Math.floor(Math.random() * 500));
    }

    pro.sort(function (x, y) {
      return x - y;
    });
    for (var c = 0; c < pro.length; c++) {
      var box = document.createElement("div");
      box.setAttribute("class", "box");
      box.setAttribute("id", `boxid${c}`);
      var imag = imgarr[Math.floor(Math.random() * imgarr.length)];
      var taga = tagarr[Math.floor(Math.random() * tagarr.length)];

      box.innerHTML = `
      <img src="${imag}" class="boximg"/>
      <h3 id="tag${c}" class="boxtag">${taga}</h3>
      <h3 id="price${c}" class="boxprice">₹${pro[c]} Only</h3>
      `;

      cont.append(box);
    }
  }
  if (doc.value == "high") {
    cont.innerHTML = "";
    var pro = [];

    for (var h = 0; h < 30; h++) {
      pro.push(500 + Math.floor(Math.random() * 500));
    }

    pro.sort(function (x, y) {
      return y - x;
    });
    for (var c = 0; c < pro.length; c++) {
      var box = document.createElement("div");
      box.setAttribute("class", "box");
      box.setAttribute("id", `boxid${c}`);
      var imag = imgarr[Math.floor(Math.random() * imgarr.length)];
      var taga = tagarr[Math.floor(Math.random() * tagarr.length)];

      box.innerHTML = `
      <img src="${imag}" class="boximg"/>
      <h3 id="tag${c}" class="boxtag">${taga}</h3>
      <h3 id="price${c}" class="boxprice">₹${pro[c]} Only</h3>
      `;

      cont.append(box);
    }
  }
}

//When the Price range is Between 1000 Rs and 2000 Rs

function chemed() {
  var check = document.getElementById("low");
  var doc = document.getElementById("sort");
  if (doc.value == "popu") {
    cont.innerHTML = "";
    var pro = [];

    for (var h = 0; h < 30; h++) {
      pro.push(1000 + Math.floor(Math.random() * 1000));
    }

    for (var c = 0; c < pro.length; c++) {
      var box = document.createElement("div");
      box.setAttribute("class", "box");
      box.setAttribute("id", `boxid${c}`);
      var imag = imgarr[Math.floor(Math.random() * imgarr.length)];
      var taga = tagarr[Math.floor(Math.random() * tagarr.length)];

      box.innerHTML = `
      <img src="${imag}" class="boximg"/>
      <h3 id="tag${c}" class="boxtag">${taga}</h3>
      <h3 id="price${c}" class="boxprice">₹${pro[c]} Only</h3>
      `;

      cont.append(box);
    }
  }
  if (doc.value == "low") {
    cont.innerHTML = "";
    var pro = [];

    for (var h = 0; h < 30; h++) {
      pro.push(1000 + Math.floor(Math.random() * 1000));
    }

    pro.sort(function (x, y) {
      return x - y;
    });
    for (var c = 0; c < pro.length; c++) {
      var box = document.createElement("div");
      box.setAttribute("class", "box");
      box.setAttribute("id", `boxid${c}`);
      var imag = imgarr[Math.floor(Math.random() * imgarr.length)];
      var taga = tagarr[Math.floor(Math.random() * tagarr.length)];

      box.innerHTML = `
      <img src="${imag}" class="boximg"/>
      <h3 id="tag${c}" class="boxtag">${taga}</h3>
      <h3 id="price${c}" class="boxprice">₹${pro[c]} Only</h3>
      `;

      cont.append(box);
    }
  }
  if (doc.value == "high") {
    cont.innerHTML = "";
    var pro = [];

    for (var h = 0; h < 30; h++) {
      pro.push(1000 + Math.floor(Math.random() * 1000));
    }

    pro.sort(function (x, y) {
      return y - x;
    });
    for (var c = 0; c < pro.length; c++) {
      var box = document.createElement("div");
      box.setAttribute("class", "box");
      box.setAttribute("id", `boxid${c}`);
      var imag = imgarr[Math.floor(Math.random() * imgarr.length)];
      var taga = tagarr[Math.floor(Math.random() * tagarr.length)];

      box.innerHTML = `
      <img src="${imag}" class="boximg"/>
      <h3 id="tag${c}" class="boxtag">${taga}</h3>
      <h3 id="price${c}" class="boxprice">₹${pro[c]} Only</h3>
      `;

      cont.append(box);
    }
  }
}

//When the Price range is ABOVE 2000

function chehig() {
  var check = document.getElementById("low");
  var doc = document.getElementById("sort");
  if (doc.value == "popu") {
    cont.innerHTML = "";
    var pro = [];

    for (var h = 0; h < 30; h++) {
      pro.push(2000 + Math.floor(Math.random() * 3000));
    }

    for (var c = 0; c < pro.length; c++) {
      var box = document.createElement("div");
      box.setAttribute("class", "box");
      box.setAttribute("id", `boxid${c}`);
      var imag = imgarr[Math.floor(Math.random() * imgarr.length)];
      var taga = tagarr[Math.floor(Math.random() * tagarr.length)];

      box.innerHTML = `
      <img src="${imag}" class="boximg"/>
      <h3 id="tag${c}" class="boxtag">${taga}</h3>
      <h3 id="price${c}" class="boxprice">₹${pro[c]} Only</h3>
      `;

      cont.append(box);
    }
  }
  if (doc.value == "low") {
    cont.innerHTML = "";
    var pro = [];

    for (var h = 0; h < 30; h++) {
      pro.push(2000 + Math.floor(Math.random() * 3000));
    }

    pro.sort(function (x, y) {
      return x - y;
    });
    for (var c = 0; c < pro.length; c++) {
      var box = document.createElement("div");
      box.setAttribute("class", "box");
      box.setAttribute("id", `boxid${c}`);
      var imag = imgarr[Math.floor(Math.random() * imgarr.length)];
      var taga = tagarr[Math.floor(Math.random() * tagarr.length)];

      box.innerHTML = `
      <img src="${imag}" class="boximg"/>
      <h3 id="tag${c}" class="boxtag">${taga}</h3>
      <h3 id="price${c}" class="boxprice">₹${pro[c]} Only</h3>
      `;

      cont.append(box);
    }
  }
  if (doc.value == "high") {
    cont.innerHTML = "";
    var pro = [];

    for (var h = 0; h < 30; h++) {
      pro.push(2000 + Math.floor(Math.random() * 3000));
    }

    pro.sort(function (x, y) {
      return y - x;
    });
    for (var c = 0; c < pro.length; c++) {
      var box = document.createElement("div");
      box.setAttribute("class", "box");
      box.setAttribute("id", `boxid${c}`);
      var imag = imgarr[Math.floor(Math.random() * imgarr.length)];
      var taga = tagarr[Math.floor(Math.random() * tagarr.length)];

      box.innerHTML = `
      <img src="${imag}" class="boximg"/>
      <h3 id="tag${c}" class="boxtag">${taga}</h3>
      <h3 id="price${c}" class="boxprice">₹${pro[c]} Only</h3>
      `;

      cont.append(box);
    }
  }
}
