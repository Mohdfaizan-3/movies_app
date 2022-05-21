document
  .querySelector("form")
  .addEventListener("submit", myLog);

let logArr =
  JSON.parse(localStorage.getItem('arrData')) || null;

function myLog() {
  event.preventDefault();

  let form = document.querySelector("form");
  let email = form.email.value;
  let password = form.pass.value;

  logArr.map(function (ele) {
      
    if (email == ele.email && password == ele.password) {
      window.location.href = "./index.html";
        
    } else {
      alert("invalid Credentials");
    }
  });
}
