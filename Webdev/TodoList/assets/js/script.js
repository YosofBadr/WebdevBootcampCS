// Add click event listener to all list items to be able to check/uncheck them
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Add click to X spans to delete an item from the list
$("ul").on("click", ".delete", function(event) {
  $(this).parent("li").fadeOut(200, function() {
    $(this).remove();
  })
  event.stopPropagation();
});

// Adds a new item to the list
$("#addItem").keypress(function(key) {
  if($(this).val() !== "")
    if(key.which == 13) {
      $("#list").append('<li> <span class="delete"> <i class="fas fa-trash"></i> </span> ' + $(this).val() + ' </li>');
      $(this).val("");
    }
});

// Adds a new item to the list
$("#plusIcon").click(function() {
  $("#addItem").fadeToggle(200, "swing");
});