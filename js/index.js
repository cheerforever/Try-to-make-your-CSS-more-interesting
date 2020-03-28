! function () {
    showPreviews();
}();

function showPreviews() {
    var a = document.getElementsByClassName("a_s");
    var i;
    for (i = 0; i < a.length; i++) {
        a[i].addEventListener("mouseover", function (event) {
            event.target.previousElementSibling.classList.remove("hide");
            event.target.previousElementSibling.classList.add("show");
        });
        a[i].addEventListener("mouseleave", function (event) {
            event.target.previousElementSibling.classList.remove("show");
            event.target.previousElementSibling.classList.add("hide");
        });
    }
}