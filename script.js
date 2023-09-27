"use strict";

const nav = document.querySelector(".nav");
const highlightBtn = document.querySelector(".highlight-music");
const highlightBtnVideo = document.querySelector(".highlight-video");
const soundcloudSet = document.querySelector(".soundcloud");
const youtube = document.querySelector(".video");
const navBtn = document.querySelector(".nav__link--btn");
const section1 = document.getElementById("#section--1");
const body = document.querySelector("body");
const hamburger = document.querySelector(".hamburger");

// nav fade animation
const handleHover = function (e) {
	if (e.target.classList.contains("nav__link")) {
		const link = e.target;
		const siblings = link.closest(".nav").querySelectorAll(".nav__link");
		const logo = link.closest(".nav").querySelector("img");

		siblings.forEach((el) => {
			if (el !== link) el.style.opacity = this;
		});
		logo.style.opacity = this;
	}
};

nav.addEventListener("mouseover", handleHover.bind(0.25));
nav.addEventListener("mouseout", handleHover.bind(1));

//display soundcloud player
highlightBtn.addEventListener("click", function (e) {
	e.preventDefault();

	if (soundcloudSet.style.display === "none") {
		soundcloudSet.style.display = "block";
	} else {
		soundcloudSet.style.display = "none";
	}
});

navBtn.addEventListener("click", function (e) {
	e.preventDefault();
});

//display youtube player
highlightBtnVideo.addEventListener("click", function (e) {
	e.preventDefault();
	if (youtube.style.display === "none") {
		youtube.style.display = "block";
	} else {
		youtube.style.display = "none";
	}
});


