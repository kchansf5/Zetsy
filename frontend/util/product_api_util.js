export const fetchProducts = () => (
  $.ajax({
    method: 'GET',
    url: 'api/products',
  })
);

export const fetchSingleProduct = id => (
  $.ajax({
    method: 'GET',
    url: `api/products/${id}`
  })
);
