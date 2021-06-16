console.log("first_js");

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
  window.location.href = "mainlandingpage.html";
}

function savesess() {
  let name = document.getElementById("username").value;
  let arr = JSON.parse(localStorage.getItem("session"));
  console.log(name, arr[0]);
  arr[0].user = name;
  console.log(arr[0]);
  localStorage.setItem("session", JSON.stringify(arr));
}
