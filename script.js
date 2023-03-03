"use strict";

const nav = document.querySelector(".nav");
const highlightBtn = document.querySelector(".highlight-music");
const soundcloudSet = document.querySelector(".soundcloud");
const navBtn = document.querySelector(".nav__link--btn");
const section1 = document.getElementById("#section--1");
const body = document.querySelector("body");



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

//display soudncloud player
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




/*


//sticky nav
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
	const [entry] = entries;

	if (!entry.isIntersecting) nav.classList.add("sticky");
	else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
	root: null,
	threshold: 0,
	rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

const revealSection = function (entries, observer) {
	const [entry] = entries;

	if (!entry.isIntersecting) return;

	entry.target.classList.remove("section--hidden");
	observer.unobserve(entry.target);
};
*/
