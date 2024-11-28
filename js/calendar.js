document.addEventListener("DOMContentLoaded", function () {
  const dateRangePicker = flatpickr("#dateRangePicker", {
    mode: "range",
    dateFormat: "Y-m-d",
    minDate: "today",
    locale: "pl",
    static: true,
    inline: true,
    onChange: updateCost,
  });

  const checkboxes = document.querySelectorAll(".reservation-checkbox");
  checkboxes.forEach((checkbox) => checkbox.addEventListener("change", updateCost));

  function updateCost() {
    const startDate = dateRangePicker.selectedDates[0];
    const endDate = dateRangePicker.selectedDates[1] || startDate;

    if (startDate && endDate) {
      const timeDiff = endDate - startDate;
      const numberOfDays = timeDiff / (1000 * 3600 * 24) + 1;

      document.getElementById(
        "selectedDates"
      ).innerText = `Wybrany termin: od ${startDate.toLocaleDateString()} do ${endDate.toLocaleDateString()}. W sumie ${numberOfDays} dni.`;

      calculateTotalCost(startDate, endDate, numberOfDays);
    }
  }
});
