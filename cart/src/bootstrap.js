import faker from "faker";

export const mount = (element) => {
	let cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

	element.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
	const el = document.querySelector("#dev-cart");

	if (el) mount(el);
}
