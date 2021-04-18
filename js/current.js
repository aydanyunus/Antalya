//this makes the current link containing li of class "active"
$(document).ready(function ($) {
    var url = window.location.href;
    var activePage = url;
    $('.header-navbar .nav li a').each(function () {
        var linkPage = this.href;

        if (activePage == linkPage) {
            $('a.navbar-list-active').removeClass('navbar-list-active')
            $(this).closest("li a").addClass("navbar-list-active");
        }
    });
});