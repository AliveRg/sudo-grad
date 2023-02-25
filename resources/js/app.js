import "./bootstrap";

import "../sass/app.scss";

import * as bootstrap from "bootstrap";

import jQuery from "jquery";
window.$ = jQuery;

$(function () {
    var $menu_popup = $(".menu-popup");

    $(".menu-triger, .menu-close").click(function () {
        $menu_popup.slideToggle(300, function () {
            if ($menu_popup.is(":hidden")) {
                $("body").removeClass("body_pointer");
            } else {
                $("body").addClass("body_pointer");
            }
        });
        return false;
    });

    $(document).on("click", function (e) {
        if (!$(e.target).closest(".menu").length) {
            $("body").removeClass("body_pointer");
            $menu_popup.slideUp(300);
        }
    });
});
