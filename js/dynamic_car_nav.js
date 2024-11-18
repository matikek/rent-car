document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("dane-techniczne")?.classList.add("active");

  document.querySelectorAll(".list-group-item").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      document.querySelectorAll(".content").forEach((content) => content.classList.remove("active"));
      document.getElementById(link.getAttribute("data-target")).classList.add("active");
    });
  });
});
