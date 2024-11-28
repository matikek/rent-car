function calculateTotalCost(startDate, endDate) {
  const carId = getUrlParams("id");

  const carData = getCarDataById(carId);
  const timeDiff = endDate - startDate;
  const days = timeDiff / (1000 * 3600 * 24) + 1;

  const car = getCarDataById(carId);
  let dailyRate = 0;

  if (days == 1) {
    dailyRate = parseFloat(car.ceny["1dzien"]);
  } else if (days >= 2 && days <= 3) {
    dailyRate = parseFloat(car.ceny["2_3dni"]);
  } else if (days >= 4 && days <= 6) {
    dailyRate = parseFloat(car.ceny["4_6dni"]);
  } else if (days >= 7 && days <= 13) {
    dailyRate = parseFloat(car.ceny["7_13dni"]);
  } else if (days >= 14 && days <= 29) {
    dailyRate = parseFloat(car.ceny["14_29dni"]);
  } else if (days >= 30) {
    dailyRate = parseFloat(car.ceny["miesiac"]);
  }

  let totalCost = dailyRate * days;

  if (document.getElementById("fuelOption").checked) {
    totalCost += 300;
  }
  if (document.getElementById("cleaningOption").checked) {
    totalCost += 150;
  }
  if (document.getElementById("assistanceOption").checked) {
    totalCost += 250 * days;
  }
  if (document.getElementById("extraDriverOption").checked) {
    totalCost += 80 * days;
  }
  if (document.getElementById("replacementCarOption").checked) {
    totalCost += 400;
  }

  document.getElementById("totalCost").value = totalCost.toFixed(2) + " zł";
}
