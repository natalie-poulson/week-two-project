// Items in our shopping cart
var shoppingCart = [];

// Produce items
var produceItems = [
	{
		img: './images/fruit.png',
		name: 'Fruit'
	},
	{
		img: './images/veg.png',
		name: 'Vegetables'
	}
];

// Entree items
var entreeItems = [
	{
		img: './images/chicken.png',
		name: 'Chicken'
	},
	{
		img: './images/ravioli.png',
		name: 'Ravioli'
	}
];

// Drink items
var drinkItems = [
	{
		img: './images/wine.png',
		name: 'Wine'
	},
	{
		img: './images/milk.png',
		name: 'Milk'
	}
];


// Add click handlers to our category buttons
$('#produce').click(function() {
	addShoppingItems('produce');
});

$('#entree').click(function() {
	addShoppingItems('entree');
});

$('#drink').click(function() {
	addShoppingItems('drink');
});

// Add click handlers to each shopping item
$('#shopping-items').on('click', '.shopping-item', function() {
	var itemName = $(this).find('p').text();
	addItemToShoppingCart(itemName);
});

// Add shopping items to our page
function addShoppingItems(category) {
	// first, clear out all items I am currently showing
	clearShoppingItems();

	var myItems;
	switch(category) {
		case 'produce':
			myItems = produceItems;
			break;
		case 'entree':
			myItems = entreeItems;
			break;
		case 'drink':
			myItems = drinkItems;
			break;
		default:
	}

	var newList = $('<ul>');
	for(var i = 0; i < myItems.length; i++) {
		var currentItem = myItems[i];

		newList.append(
			`<li class="shopping-item">
				<img src="${currentItem.img}">
				<p>${currentItem.name}</p>
			</li>`);
	}

	$('#shopping-items').append(newList);
}

// Clear our current shopping-items
function clearShoppingItems() {
	$('#shopping-items').empty();
}

// Add item to shopping cart
function addItemToShoppingCart(item) {
	$('#shopping-cart ul').append(`
		<li>
			${item}
		</li>
	`);
}
