const button = document.querySelector(".btn");
button.addEventListener("click", calculateAmount);

const buttonTip = document.querySelector("#addTip");
buttonTip.addEventListener("click", showTip);

function showTip(e) {
    tip.style.display = "block";
    e.preventDefault();
}
