/*function sign() {
  let form = document.getElementById("form");
  let name = form.name.value;
  let email = form.email.value;
  let num = form.num.value;
  let pass = form.pass.value;
  let check = form.check.checked;
  console.log(pass);
  if (name == "" || email == "" || num == "") {
    alert("One or more fields are empty");
    return;
  }
  if (pass.length < 8) {
    console.log(pass.length);
    alert("Password Must be atleast 8 Characters");
    return;
  }
  if (check == false) {
    alert("You've not agreed to our Terms and Conditions");
    return;
  }
 
  let user = {
    name,
    email,
    num,
    pass,
  };
  let arr = JSON.parse(localStorage.getItem("userarr"));
  if (arr == null) {
    arr = [];
    arr.push(user);
  } else {
    arr = JSON.parse(localStorage.getItem("userarr"));
    var k = 0;
    for (i = 0; i < arr.length; i++) {
      var c = 0;
      for (key in user) {
        if (arr[i][key] == user[key]) {
          c++;
          break;
        }
      }
      if (c > 0) {
        k++;
        break;
      }
    }
    if (k > 0) {
      alert("Account already exists");
      return;
    } else {
      arr.push(user);
      window.location.href = "index.html";
    }
  }

  localStorage.setItem("userarr", JSON.stringify(arr));
}

function log() {
  let arr = JSON.parse(localStorage.getItem("userarr"));
  let form = document.getElementById("logform");
  let nam = form.name.value;
  let pass = form.pass.value;
  console.log(nam, pass, arr);

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].name == nam || arr[i].email == nam) {
      if (arr[i].pass == pass) {
        console.log("Loged In as " + arr[i].name);
        window.location.href = "index.html";
      }
    }
  }
}*/
//starts from here----->
function go() {
  console.log("lets go");
  let num = document.getElementById("num").value;
  console.log(num);
  let number = { num };
  let arr = JSON.parse(localStorage.getItem("pharmuser"));
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("pharmuser"));
  }

  arr.push(number);
  localStorage.setItem("pharmuser", JSON.stringify(arr));

  let parent = document.getElementById("entry");
  parent.innerHTML = "";
  var a = ran();
  var b = ran();
  var c = ran();
  var d = ran();
  console.log(a, b, c, d);
  parent.innerHTML = `
    <h4 style="padding-left:20px"> Enter OTP has been sent to ${num}</h4>
    <div class="otpflex">
    <input type="text" id="otp1" />
    <input type="text" id="otp2" />
    <input type="text" id="otp3" />
    <input type="text" id="otp4"/>
    </div>
    <div class="resendflex">
    <p>Change Number</p>
    <p>Resend OTP</p>
    </div>
    <button class="go" onclick="logged(${a},${b},${c},${d})">Continue</button>
    `;
}

function ran() {
  return Math.floor(Math.random() * 10);
}

var loog = false;
function logged(a, b, c, d) {
  let o1 = document.getElementById("otp1").value;
  let o2 = document.getElementById("otp2").value;
  let o3 = document.getElementById("otp3").value;
  let o4 = document.getElementById("otp4").value;
  console.log(o1, o2, o3, o4);
  if (o1 == a && o2 == b && o3 == c && o4 == d) {
    loog = true;

    let profile = document.createElement("p");
    profile.innerText = "Fuck Yeah";
    let loguser = document.getElementById("useme");
    loguser.append("profile");
    // let par = document.getElementById("rit");
    // par.insertBefore(loguser, profile);

    window.location.href = "mainlandingpage.html";

    change();
  } else {
    alert("Enter Valid Number and OTP sent");
  }
}

function change() {
  let loguser = document.getElementById("useme");
  console.log(loguser);

  loguser.innerText = "User";
}

if (loog) {
  let loguser = document.getElementById("useme");
  console.log(loguser, loog);

  loguser.innerText = "User";
} else {
  console.log(loog);
  let loguser = document.getElementById("useme");
  console.log(loguser, loog);
}
