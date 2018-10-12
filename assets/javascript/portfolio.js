$(document).ready(function () {
    $("#githubAccount").addClass("border-right");
    $("#linkedInAccount").addClass("border-right");
});
function mobileViewUpdate() {
    if ($(window).width() < 514) {
        $("#githubAccount").addClass("border-bottom");
        $("#linkedInAccount").addClass("border-bottom");
        $("#githubAccount").removeClass("border-right");
        $("#linkedInAccount").removeClass("border-right");
    } else {
        $("#githubAccount").removeClass("border-bottom");
        $("#linkedInAccount").removeClass("border-bottom");
        $("#githubAccount").addClass("border-right");
        $("#linkedInAccount").addClass("border-right");
    }
}

$(window).on('load, resize', mobileViewUpdate);