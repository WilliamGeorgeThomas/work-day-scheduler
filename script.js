$(function () {
  let buttons = $(".saveBtn");
  let dayDisplay = $("#currentDay");

  $(dayDisplay).append(dayjs().format("MMMM DD, YYYY"));

  buttons.on("click", function (event) {
    let time = $(this).parent().attr("id");
    let description = $(this).siblings(".description").val();
    // console.log(time, description);
    localStorage.setItem(time, description);
  });

  $(".time-block").each(function () {
    let hour = parseInt($(this).attr("id").split("-")[1]);

    if (hour > dayjs().hour()) {
      $(this).addClass("future");
    } else if (hour === dayjs().hour()) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  });

  $("#hour-9").children(".description").val(localStorage.getItem("hour-9"));
  $("#hour-10").children(".description").val(localStorage.getItem("hour-10"));
  $("#hour-11").children(".description").val(localStorage.getItem("hour-11"));
  $("#hour-12").children(".description").val(localStorage.getItem("hour-12"));
  $("#hour-1").children(".description").val(localStorage.getItem("hour-1"));
  $("#hour-2").children(".description").val(localStorage.getItem("hour-2"));
  $("#hour-3").children(".description").val(localStorage.getItem("hour-3"));
  $("#hour-4").children(".description").val(localStorage.getItem("hour-4"));
  $("#hour-5").children(".description").val(localStorage.getItem("hour-5"));
});
