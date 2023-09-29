"use strict";

const nav = document.querySelector(".nav");
const highlightBtn = document.querySelector(".highlight-music");
const highlightBtnVideo = document.querySelector(".highlight-video");
const soundcloudSet = document.querySelector(".soundcloud");
const youtube = document.querySelector(".video");
const navBtn = document.querySelector(".nav__link--btn");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links");
const webContent = document.querySelector(".content");

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

//hamburger menu
hamburger.addEventListener("click", function (e) {
	e.preventDefault();
	navLinks.classList.toggle("active");
	webContent.classList.toggle("active");
	hamburger.classList.toggle("active");
});
