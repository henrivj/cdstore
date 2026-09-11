function setMainMargin() {
	const header = document.querySelector("header")
	const main = document.querySelector("main")

	main.style.marginTop = `${header.offsetHeight * 3}px`
}

setMainMargin()
