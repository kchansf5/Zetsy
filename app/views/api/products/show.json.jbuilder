json.product do
  json.extract! @product, :product_name, :product_description, :price, :image_url
end
