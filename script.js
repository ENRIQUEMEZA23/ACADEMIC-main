var dropdowns = document.getElementsByClassName("dropdown");
for (var i = 0; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.getElementsByClassName("dropdown-content")[0];
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

document.getElementById("change-color").addEventListener("click", function() {
  document.querySelector("footer").style.backgroundColor = "lightblue";
});

$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});

var dropdownTriggerList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownTriggerList.map(function (dropdownTriggerEl) {
  return new bootstrap.Dropdown(dropdownTriggerEl)
});
