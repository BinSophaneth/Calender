let currentDay = null;
$(function () {
  $('input[id="input-date"]').daterangepicker({
    autoUpdateInput: false,
    locale: {
      cancelLabel: "Clear",
    },
  });

  $('input[id="input-date"]').on(
    "apply.daterangepicker",
    function (ev, picker) {
      $(this).val(
        picker.startDate.format("DD-MMMM-YYYY") +
          " --> " +
          picker.endDate.format("DD-MMMM-YYYY")
      );
    }
  );
});
$("#exampleModal").on("hidden.bs.modal", function () {
  $("#myform").trigger("reset");
});
$("#myform").submit(function (event) {
  event.preventDefault();

  let tmpObj = {
    title: $("#inputTitle").val(),
    type: $("#inputGroupSelect").val(),
    reason: $("#message-text").val(),
    date: $("#input-date").val(),
  };
  console.log(currentDay);
  sessionStorage.setItem(currentDay, JSON.stringify(tmpObj));
});
// sessionStorage.setItem('lastname','Smith');
$(".date-container").click(function () {
  let passedID = $(this).children(0).attr("id");
  currentDay = passedID;
  console.log(passedID);
  let data = sessionStorage.getItem(passedID);
  if (data !== null) {
    data = JSON.parse(data);
    $("#inputTitle").val(data.title);
    $("#inputGroupSelect").val(data.type);
    $("#message-text").val(data.reason);
    $("#input-date").val(data.date);
  }
  console.log(data);
});
