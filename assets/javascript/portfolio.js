$(document).ready(function () {
    // $("#githubAccount").addClass("border-right");
    // $("#linkedInAccount").addClass("border-left");
});
function mobileViewUpdate() {
    // if ($(window).width() < 514) {
    //     $("#githubAccount").addClass("border-bottom");
    //     $("#linkedInAccount").addClass("border-bottom");
    //     $("#githubAccount").removeClass("border-left");
    //     $("#linkedInAccount").removeClass("border-left");
    // } else {
    //     $("#githubAccount").removeClass("border-bottom");
    //     $("#linkedInAccount").removeClass("border-bottom");
    //     $("#githubAccount").addClass("border-left");
    //     $("#linkedInAccount").addClass("border-left");
    // }
}

$(window).on('load, resize', mobileViewUpdate);