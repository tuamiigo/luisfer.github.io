"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    document.querySelector(".navigation").addEventListener("click", showNavigation);
    document.querySelectorAll(".socialmedia img").forEach(icon => {
        hoverImage(icon);
    });
    document.querySelectorAll("nav ul li").forEach(li => {
        hoverImage(li);
    });

    document.querySelectorAll(".featured li").forEach(image => {
        hoverArtist(image);
    });

}

function showNavigation() {
    document.querySelector("ul").classList.toggle("hidden");
    document.querySelector("nav").classList.toggle("open-navigation");
    document.querySelector(".title").classList.toggle("hidden");
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


function hoverImage(icon){
    icon.addEventListener("mouseover", function () {
        icon.classList.add("hovering_item");
    });
    icon.addEventListener("mouseleave", function () {
        icon.classList.remove("hovering_item");
    });
}

function hoverArtist(image){
    image.addEventListener("mouseover", function () {
        image.classList.add("hovering_artist");
    });
    image.addEventListener("mouseleave", function () {
        image.classList.remove("hovering_artist");
    });
}


