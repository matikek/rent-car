document.addEventListener("DOMContentLoaded", function () {
  const carId = getUrlParams("id");

  const carData = getCarDataById(carId);

  const splideList = document.querySelector("#image-carousel .splide__list");

  carData.images.forEach((imageSrc, index) => {
    const slide = document.createElement("li");
    slide.classList.add("splide__slide");

    const link = document.createElement("a");
    link.href = imageSrc;
    link.setAttribute("data-lightbox", "gallery");
    link.setAttribute("data-title", `Zdjęcie samochodu ${index + 1}`);

    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = `Zdjęcie samochodu ${index + 1}`;

    link.appendChild(img);
    slide.appendChild(link);

    splideList.appendChild(slide);
  });

  new Splide("#image-carousel", {
    perPage: 3,
    gap: "30px",
    breakpoints: {
      1024: {
        perPage: 2,
      },
      640: {
        perPage: 1,
      },
    },
  }).mount();
});
