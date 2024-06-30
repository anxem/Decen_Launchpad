$(document).ready(function () {
  $("#my-form").submit(function (e) {
    e.preventDefault();

    const formData = $(this).serialize();

    $.ajax({
      type: "POST",
      url: "submit.php", // PHP file to handle database insertion
      data: formData,
      success: function (response) {
        $("#response").html(response);
      },
    });
  });
});
