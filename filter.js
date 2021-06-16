console.log("hello");
//array of Images
var imgarr = [
  "https://cdn01.pharmeasy.in/dam/products_otc/329404/depura-kids-400-vit-d-nano-vitamin-drops-bottle-of-15-ml-1-1597363349.jpg?dim=200x0&dpr=1.25&q=100",
  "https://cdn01.pharmeasy.in/dam/products_otc/V36951/babychakra-hand-sanitizer-bottle-of-50-ml-2-1613733042.jpg?dim=200x0&dpr=1.25&q=100",
  "https://cdn01.pharmeasy.in/dam/products_otc/022290/becozym-c-forte-vitamin-b-complex-biotin-vitamin-c-strip-of-15-tablets-2-1605104971.jpg?dim=200x0&dpr=1.25&q=100",
  "https://cdn01.pharmeasy.in/dam/products_otc/I40119/dettol-ph-balanced-skincare-handwash-packet-of-175-ml-2-1610439760.jpg?dim=200x0&dpr=1.25&q=100",
  "https://cdn01.pharmeasy.in/dam/products_otc/I41646/baidyanath-chyawanprash-special-health-food-jar-of-500-g-2-1614878877.jpg?dim=200x0&dpr=1.25&q=100",
  "https://cdn01.pharmeasy.in/dam/products_otc/I48399/protinex-lite-vanilla-nutrition-drink-tin-of-250-g-2-1613553261.jpg?dim=200x0&dpr=1.25&q=100",
  "https://cdn01.pharmeasy.in/dam/products/I08024/climax-for-men-bottle-of-12-g-spray-box-front-1-1603444769.jpg?dim=200x0&dpr=1.25&q=100",
  "https://cdn01.pharmeasy.in/dam/products_otc/W84040/savlon-disinfectant-liquid-500-ml-2-1613733059.jpg?dim=200x0&dpr=1.25&q=100",
  "https://cdn01.pharmeasy.in/dam/products_otc/269382/i-know-ovulation-detection-kit-3-1612421368.jpg?dim=200x0&dpr=1.25&q=100",
  "https://cdn01.pharmeasy.in/dam/products_otc/U60635/amrutanjan-comfy-ultra-xl-sanitary-pads-packet-of-6-2-1613733735.jpg?dim=200x0&dpr=1.25&q=100",
  "https://cdn01.pharmeasy.in/dam/products_otc/M67325/bpl-smart-oxy-finger-tip-pulse-black-oximeter-black-2-1601980773.jpg?dim=200x0&dpr=1.25&q=100",
  "https://cdn01.pharmeasy.in/dam/products_otc/C02103/jziki-jzk-301-pulse-oximeter-2-1620207350.jpg?dim=200x0&dpr=1.25&q=100",
  "https://cdn01.pharmeasy.in/dam/products_otc/Z36722/beurer-ft-09-1-clinical-thermometer-2-1606819406.jpg?dim=200x0&dpr=1.25&q=100",
  "https://cdn01.pharmeasy.in/dam/products_otc/S03838/colgate-diabetics-special-toothpaste-for-diabetics-with-madhunashini-and-jamun-seed-extracts-sugar-free-toothpaste-70g-3-1620213216.jpg?dim=200x0&dpr=1.25&q=100",
  "https://cdn01.pharmeasy.in/dam/products_otc/131679/one-touch-select-glucometer-test-strips-bottle-of-50-1-1619437056.jpg?dim=200x0&dpr=0.8533333539962769&q=100",
  "https://cdn01.pharmeasy.in/dam/products_otc/I05582/dr-morepen-bg-03-glucometer-test-strips-box-of-50-1-1604484376.jpg?dim=200x0&dpr=0.8533333539962769&q=100",
  "https://cdn01.pharmeasy.in/dam/products_otc/D70449/oxysat-finger-tip-pulse-oximeter-with-2-batteries-18-months-warranty-2-1608125076.jpg?dim=200x0&dpr=0.8533333539962769&q=100",
  "https://cdn01.pharmeasy.in/dam/products_otc/B71749/liveasy-essentials-diabetic-orthopedic-black-slippers-men-size-uk-8-us-9-6.1-1601969730.jpg?dim=200x0&dpr=0.8533333539962769&q=100",
  "https://cdn01.pharmeasy.in/dam/products_otc/I34686/prohance-d-vanilla-diabetes-care-powder-sugar-free-bottle-of-400-g-2-1619445473.jpg?dim=200x0&dpr=0.8533333539962769&q=100",
  "https://cdn01.pharmeasy.in/dam/products_otc/266249/depura-60k-nano-vit-d-vitamin-drops-sugar-free-bottle-of-5-ml-2-1607418139.jpg?dim=200x0&dpr=0.8533333539962769&q=100",
  "https://cdn01.pharmeasy.in/dam/products_otc/Q82571/lizol-floral-disinfectant-floor-cleaner-liquid-bottle-of-200-ml-2-1613392261.jpg?dim=200x0&dpr=0.8533333539962769&q=100",
  "https://cdn01.pharmeasy.in/dam/products_otc/M03451/godrej-protekt-multipurpose-disinfectant-liquid-kills-999-germs-anti-bacterial-for-home-personal-hygiene-citrus-fragrance-500ml-2-1608733597.jpg?dim=200x0&dpr=0.8533333539962769&q=100",
  "https://cdn01.pharmeasy.in/dam/products_otc/J75776/harpic-flushmatic-aquamarine-toilet-block-twin-pack-packet-of-100-g-2-1613637599.jpg?dim=200x0&dpr=0.8533333539962769&q=100",
  "https://cdn01.pharmeasy.in/dam/products_otc/I48609/pee-safe-toilet-seat-sanitizer-spray-75-ml-multi-fragrance-mint-lavender-floral-pack-of-3-2-1616494161.jpg?dim=200x0&dpr=0.8533333539962769&q=100",
  "https://cdn01.pharmeasy.in/dam/products_otc/H90887/pampers-baby-gentle-wet-wipes-with-aloe-97-pure-water-72-count-2-1607325713.jpg?dim=200x0&dpr=0.8533333539962769&q=100",
];

//array of brands, medicine names
var tagarr = [
  "Dettol",
  "Kapiva",
  "Apollo",
  "Paracetamol",
  "Pfizer",
  "Is this even a Medicine",
  "Bolghar",
  "Zandu Balm",
  "Zova",
  "Lizol Power",
  "Eno regular",
  "cotton Buds",
  "colgate",
  "Disprin",
  "Allout liquid",
  "Pudin Hara",
  "Nivea milk lotion",
  "Nivea bath liquid",
  "Dove hair care",
  "Himalya Body Powder",
  "D-protine vanilla",
  "Live easy oethocare",
  "Bandage +"

];
var comparr = ["This", "That", "Here", "There","Balaji","L$T","Nestle","H$M","Aboot","Himalya","23Yards","ACCARE","CANDID","FASH","LUX","OLAY"];
console.log(
  imgarr[Math.floor(Math.random() * imgarr.length)],
  tagarr[Math.floor(Math.random() * tagarr.length)],
  Math.floor(Math.random() * 3000)
);
//main element in which to be ppulated
var cont = document.getElementById("jav");
//function to generate n number of products
function loop(f) {
  localStorage.removeItem("pharm");
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
  var img3 = imgarr[Math.floor(Math.random() * imgarr.length)];
  var img2 = imgarr[Math.floor(Math.random() * imgarr.length)];
  var img1 = imag;
  var company = comparr[Math.floor(Math.random() * comparr.length)];
  var taga = tagarr[Math.floor(Math.random() * tagarr.length)];
  var pri = Math.floor(Math.random() * 3000);
  var off = Math.round(Math.random() * 0.3 * 100) / 100;
  var mrp = Math.floor(pri / (1 - off));
  var stock = Math.round(Math.random() * 100) / 100;
  var count = x;
  var qty = 1;
  box.innerHTML = `
    <img src="${imag}" class="boximg"/>
    <h3 id="tag${x}" class="boxtag">${taga}</h3>
    <h3 id="price${x}" class="boxprice">₹${pri} Only</h3>
    `;

  cont.append(box);

  let product = {
    taga,
    pri,
    imag,
    img1,
    img2,
    img3,
    company,
    off,
    mrp,
    stock,
    count,
    qty,
  };
  let arr = localStorage.getItem("pharm");

  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("pharm"));
  }

  arr.push(product);
  localStorage.setItem("pharm", JSON.stringify(arr));

  box.onclick = function (product) {
    console.log(product);
    let arr = JSON.parse(localStorage.getItem("pharm"));

    let id = box.id.split("boxid")[1];
    for (var i = 0; i < arr.length; i++) {
      //console.log(arr[i]);
      if (arr[i].count == id) {
        console.log(arr[i]);
        localStorage.removeItem("showproduct");
        localStorage.setItem("showproduct", JSON.stringify(arr[i]));
        break;
      }
    }
    window.location.href = "add_cart.html";
  };
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
