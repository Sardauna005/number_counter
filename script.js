document.addEventListener("DOMContentLoaded", function what() {
  let toClick = document.querySelector("#click");
  let val = 0;

  toClick.addEventListener("click", function () {
    document.getElementById("btn").innerHTML = ++val;
    console.log("reached me");
  });
});
