const calculate = () => {
  const riceQty = document.querySelector('input[name="riceQty"]').value;
  const beansQty = document.querySelector('input[name="beansQty"]').value;
  const chickenQty = document.querySelector('input[name="chickenQty"]').value;

  const ricePrice = 4;
  const beansPrice = 3;
  const chickenPrice = 7;

  const total =
    riceQty * ricePrice + beansQty * beansPrice + chickenQty * chickenPrice;

  document.querySelector("#total").innerHTML = total;
};

document.querySelector("button").addEventListener("click", calculate);
