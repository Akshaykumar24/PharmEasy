console.log("Yes");

function searchmed() {
  let inp = document.getElementById("search1234").value;
  console.log(inp);

  let arr = JSON.parse(localStorage.getItem("searchcart"));
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("searchcart"));
  }
  //localStorage.removeItem("searchcart");
  localStorage.setItem("searchcart", JSON.stringify(arr));
  document.getElementById("searchfor").innerText = inp;
  let parent = document.getElementById("dodd");
  parent.innerHTML = "";
  for (var i = 0; i < 15; i++) {
    run(i, inp);
  }
}

{
  /* <div class="srch_cont1">
                <div class="srch_img1">
                    <img src="https://cdn01.pharmeasy.in/dam/products/064425/ecosprin-75mg-strip-of-14-tablets-box-front-1-1607336525.jpg?dim=80x80&dpr=1.25&q=100"
                        alt="">
                </div>
                <div class="srch_para1">
                    <p>Ecospin 75mg Strip of 14 tablets</p>
                    <p>By USV PVT LTD</p>
                    <p>14 Tablet(s) in strip</p>
                    <div class="srch_bar1">
                        <span><strong>4.13*</strong></span>
                        <span>MRP <strike>4.86</strike></span>
                        <span class="srch_bar12">Save 15%</span>
                        <span>
                            <button type="submit">Add to Cart</button>
                        </span>
                    </div>
                </div>
            
    </div> */
}

function run(x, inp) {
  console.log("comin");
  var box = document.createElement("div");
  box.setAttribute("class", "srch_cont1");
  box.setAttribute("id", `boxid${x}`);

  // var imag = imgarr[Math.floor(Math.random() * imgarr.length)];
  var imag = imgarr[Math.floor(Math.random() * n)];
  var company = comparr[Math.floor(Math.random() * comparr.length)];
  var taga = inp + " " + tagarr[Math.floor(Math.random() * tagarr.length)];
  var pri = Math.floor(Math.random() * 3000);
  var off = Math.round(Math.random() * 0.3 * 100) / 100;
  var mrp = Math.floor(pri / (1 - off));
  var stock = Math.round(Math.random() * 100) / 100;
  var count = x;
  var qty = 1;
  box.innerHTML = `
    <div class="srch_img1">
                    <img src=${imag}
                        alt="">
                </div>
                <div class="srch_para1">
                    <p>${taga}</p>
                    <p>By ${company} PVT LTD</p>
                    <p>14 Tablet(s) in strip</p>
                    <div class="srch_bar1">
                        <span><strong>₹${pri}*</strong></span>
                        <span>MRP <strike>₹${mrp}</strike></span>
                        <span class="srch_bar12">Save ${Math.round(
                          off * 100
                        )}%</span>
                        <span>
                            <button type="submit" id="adc${x}">Add to Cart</button>
                        </span>
                    </div>
                </div>
    `;
  let parent = document.getElementById("dodd");
  parent.append(box);

  let product = {
    taga,
    pri,
    imag,
    company,
    off,
    mrp,
    stock,
    count,
    qty,
  };
  let arr = localStorage.getItem("searchcart");

  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("searchcart"));
  }

  arr.push(product);
  localStorage.setItem("searchcart", JSON.stringify(arr));

  let btncart = document.getElementById(`adc${x}`);
  btncart.onclick = function (product) {
    let btid = btncart.getAttribute("id").split("adc")[1];

    console.log(btncart, btid);
    console.log(product);
    let cart = JSON.parse(localStorage.getItem("pharmcart"));
    //let arr = JSON.parse(localStorage.getItem("searchcart"));
    // let cart = JSON.parse(localStorage.getItem("pharmcart"));
    if (cart == null) {
      cart = [];
    } else {
      cart = JSON.parse(localStorage.getItem("pharmcart"));
    }
    console.log(cart);

    for (var i = 0; i < arr.length; i++) {
      if (btid == arr[i].count) {
        console.log(arr[i]);
        cart.push(arr[i]);
        alert("Item added to cart");
        btncart.innerText = "Added to Cart";
        break;
      }
    }

    //cart.push(product);
    localStorage.setItem("pharmcart", JSON.stringify(cart));
    // let id = box.id.split("boxid")[1];
    // for (var i = 0; i < arr.length; i++) {
    //   //console.log(arr[i]);
    //   if (arr[i].count == id) {
    //     console.log(arr[i]);
    //     cart.push(arr[i]);
    //     localStorage.setItem("pharmcart", JSON.stringify(cart));
    //     break;
    //   }
    // }
  };
}

let itemincart = document.getElementById("itemincart");
let cart = JSON.parse(localStorage.getItem("pharmcart"));
if (cart.length != 0) {
  itemincart.innerText = `${cart.length} items already in Cart`;
}

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
let n = imgarr.length;
var comparr = [
  "This",
  "That",
  "Balaji",
  "L$T",
  "Nestle",
  "H$M",
  "Aboot",
  "Himalya",
  "23Yards",
  "ACCARE",
  "CANDID",
  "FASH",
  "LUX",
  "OLAY",
  "Gucci",
  "GUCCI",
];
var tagarr = [
  "Dettol",
  "Remdesivr",
  "Protein Strawberry",
  "Strawberry",
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
  "D-protien vanilla",
  "Live easy oethocare",
  "Bandage +",
  "75mg Strip of 14 tablets",
  "65mg Strip of 14 tablets",
  "50mg Strip of 14 tablets",
  "45mg Strip of 12 tablets",
  "90mg Strip of 12 tablets",
  "120mg Strip of 10 tablets",
  "10mg Strip of 8 tablets",
  "100mg Strip of 8 tablets",
  "80mg Strip of 8 tablets",
];
