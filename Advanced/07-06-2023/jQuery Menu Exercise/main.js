/// <reference path="jquery-3.7.0.js" />

"use strict";

$(() => {
    // Hide all sub-menus
    $("#menu > ul").hide();

    $("#menu > h3").mouseenter(function () {

        // show next sub menu:
        $(this).next().slideDown(500);

        //Hide other sub menus:
        $(this).next().siblings("ul").slideUp();


        // $(this).next().slideDown(500).siblings("ul").slideUp(500);

    })



});

