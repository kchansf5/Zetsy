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

export const fetchSearchProduct = query => {
  return $.ajax({
    method: "GET",
    url: '/api/search',
    data: {query}
  });
};
