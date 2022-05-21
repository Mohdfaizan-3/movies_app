function Constructor(n, num, e, p) {
  this.name = n;
  this.number = num;
  this.email = e;
  this.password = p;
}

document
  .querySelector("form")
  .addEventListener("submit", mySignup);

var arr = [];

function mySignup() {
  event.preventDefault();
  let form = document.querySelector("form");
  let name1 = form.name.value;
  let number = form.cont.value;
  let email = form.email.value;
  let password = form.pass.value;

  let sign = new Constructor(
    name1,
    number,
    email,
    password
  );
  arr.push(sign);
  console.log(arr);
  localStorage.setItem("arrData", JSON.stringify(arr));
}
