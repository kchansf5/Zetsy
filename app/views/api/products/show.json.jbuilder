json.product do
  json.extract! @product, :product_name, :description, :price, :image_url
end
