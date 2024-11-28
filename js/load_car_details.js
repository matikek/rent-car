function loadCarDetails() {
  const carId = getUrlParams("id");
  const car = getCarDataById(carId);

  if (car) {
    document.getElementById("car_title").innerText = car.car_title;
    document.getElementById("car_text").innerText = car.car_text;
    document.getElementById("moc").innerText = car.moc;
    document.getElementById("zeroToHundred").innerText = car.zeroToHundred;
    document.getElementById("skrzynia").innerText = car.skrzynia;
    document.getElementById("naped").innerText = car.napęd;
    document.getElementById("silnik").innerText = car.silnik;
    document.getElementById("liczbaDrzwi").innerText = car.liczbaDrzwi;
    document.getElementById("liczbaMiejsc").innerText = car.liczbaMiejsc;
    document.getElementById("rodzajPaliwa").innerText = car.rodzajPaliwa;
    document.getElementById("zawieszenie").innerText = car.zawieszenie;

    document.getElementById("systemy_bezpieczenstwa").innerText = car.systemy_bezpieczenstwa;
    document.getElementById("wnetrze").innerText = car.wnętrze;
    document.getElementById("audio").innerText = car.audio;
    document.getElementById("swiatla").innerText = car.swiatla;
    document.getElementById("wyglad_zewnetrzny").innerText = car.wyglad_zewnetrzny;
    document.getElementById("kola").innerText = car.kola;

    document.getElementById("cena_1dzien").innerText = car.ceny["1dzien"];
    document.getElementById("cena_2_3dni").innerText = car.ceny["2_3dni"];
    document.getElementById("cena_4_6dni").innerText = car.ceny["4_6dni"];
    document.getElementById("cena_7_13dni").innerText = car.ceny["7_13dni"];
    document.getElementById("cena_14_29dni").innerText = car.ceny["14_29dni"];
    document.getElementById("cena_miesiac").innerText = car.ceny["miesiac"];

    const carHeader = document.getElementById("car-header");
    carHeader.style.backgroundImage = `url(${car.headerImage})`;

    const carImage = document.getElementById("car-image");
    carImage.src = car.carImage;
  }
}

function getUrlParams(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

window.onload = loadCarDetails;
