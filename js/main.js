window.onload = function () {
	setTimeout(function () {
		document.querySelector(".logo-img").classList.remove("logo-img-animation");
	}, 3000);
};

function hideHeader() {
	let position = 74;
	let header = document.querySelector(".header");
	window.addEventListener("scroll", function () {
		console.log(window.pageYOffset);

		if (
			window.pageYOffset > 74 &&
			window.pageYOffset > position &&
			!header.classList.contains("hide")
		) {
			header.classList.add("hide");
		} else if (
			window.pageYOffset < position &&
			header.classList.contains("hide")
		) {
			header.classList.remove("hide");
			console.log(position);
		}
		position = window.pageYOffset;
	});
}
hideHeader();

function closeMenu() {
	let menu = document.querySelector("#burgerMenu");
	if (menu.classList.contains("show")) {
		menu.classList.remove("show");
	}
}

function showImage() {
	let image = [...document.querySelectorAll(".odd-thumbnail")];
	let source = document.querySelector(".img-modal").src;
	console.log(source);
	for (let i = 0; i < image.length; i++) {
		const el = image[i];
		console.log(el);
		el.addEventListener("click", () => {
			console.log(el.src);
			document.querySelector(".img-modal").src = el.src;
			document.querySelector(".modal-image").classList.add("active");
			document.querySelector(".overlay").classList.add("active");
		});
	}
}
showImage();

function closeImage() {
	let overlay = document.querySelector(".overlay");
	overlay.addEventListener("click", () => {
		document.querySelector(".modal-image").classList.remove("active");
		document.querySelector(".overlay").classList.remove("active");
	});
	let cross = document.querySelector(".modal-close");
	cross.addEventListener("click", () => {
		document.querySelector(".modal-image").classList.remove("active");
		document.querySelector(".overlay").classList.remove("active");
	});
}
closeImage();
