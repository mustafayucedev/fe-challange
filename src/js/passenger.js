const passenger = document.getElementById("passenger");
const passengerList = document.getElementById("passenger-list");

const addClass = () => {
  passengerList.classList.add("active");
}

const removeClass = () => {
  passengerList.classList.remove("active");
}

passengerList.addEventListener("click", (e) => {
  e.stopPropagation();
  addClass();
});

passenger.addEventListener("click", (e) => {
  e.stopPropagation();
  addClass();
});

document.addEventListener("click", () => {
  removeClass();
});
