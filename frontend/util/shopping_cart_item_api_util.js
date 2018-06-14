//GET all of the items in the cart
export const fetchCartItem = () => (
  $.ajax({
    method: 'GET',
    url: 'api/shopping_cart_item/'
  })
);

// POST a new item into the cart
export const createCartItem = (item) => (
  $.ajax({
    method: 'POST',
    url: "api/shopping_cart_item/",
    data: { item }
  })
);


// PATCH update an existing item in the cart
export const updateCartItem = (item) => (
  $.ajax({
    method: 'PATCH',
    url: `api/shopping_cart_item/${item.id}`,
    data: { item }
  })
);


// DELETE an item from the cart
export const removeCartItem = (item) => (
  $.ajax({
    method: 'DELETE',
    url: `api/shopping_cart_item/${item}`
  })
);
