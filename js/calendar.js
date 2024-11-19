document.addEventListener("DOMContentLoaded", function () {
  var dateRangePicker = flatpickr("#dateRangePicker", {
    mode: "range",
    dateFormat: "Y-m-d",
    minDate: "today",
    locale: "pl",
    static: true,
    inline: true,
    onChange: function (selectedDates) {
      if (selectedDates.length > 0) {
        const startDate = selectedDates[0];
        const endDate = selectedDates[1] || startDate;

        const timeDiff = endDate - startDate;
        const numberOfDays = timeDiff / (1000 * 3600 * 24);

        const startDateFormatted = startDate.toLocaleDateString();
        const endDateFormatted = endDate.toLocaleDateString();

        document.getElementById("selectedDates").innerText = `Wybrany termin: od ${startDateFormatted} do ${endDateFormatted}. W sumie ${
          numberOfDays + 1
        } dni.`;
      }
    },
  });
});
