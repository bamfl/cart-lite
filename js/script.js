document.addEventListener('DOMContentLoaded', () => {
	const buyButtons = document.querySelectorAll('button'),
				openCartBtn = document.querySelector('.open'),
				shop = document.querySelector('.shop');

	const createCart = () => {
		const cart = document.createElement('div'),
					cartField = document.createElement('div'),
					cartHeader = document.createElement('h2'),
					closeCartBtn = document.createElement('button');
		
		cart.classList.add('cart');
		cartField.classList.add('cart-field');
		closeCartBtn.classList.add('close');

		cartHeader.innerHTML = 'В нашей корзине:';
		closeCartBtn.innerHTML = 'Закрыть';

		document.body.append(cart);
		cart.append(cartHeader);
		cart.append(cartField);
		cart.append(closeCartBtn);
	};

	createCart();

	const cartField = document.querySelector('.cart-field'),
				cart = document.querySelector('.cart'),
				closeCartBtn = document.querySelector('.close');

	openCartBtn.addEventListener('click', () => cart.style.display = 'block');
	closeCartBtn.addEventListener('click', () => cart.style.display = '');

	const moveToCart = event => {
		const product = event.target.parentElement,
					removeCartBtn = document.createElement('button');

		event.target.remove();
		removeCartBtn.innerHTML = 'Удалить';
		product.append(removeCartBtn);
		cartField.append(product);

		removeCartBtn.addEventListener('click', event => removeFromCart(event));
	};

	const removeFromCart = event => {
		const product = event.target.parentElement,
					buyCartBtn = document.createElement('button');

		event.target.remove();
		buyCartBtn.innerHTML = 'Купить!';
		product.append(buyCartBtn);
		shop.append(product);

		buyCartBtn.addEventListener('click', event => moveToCart(event));	
	};

	buyButtons.forEach(btn => {
		btn.addEventListener('click', event => moveToCart(event));
	});	
});
