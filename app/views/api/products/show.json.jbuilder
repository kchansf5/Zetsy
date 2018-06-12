json.product do
  json.extract! @product, :id, :product_name, :description, :price, :category, :image_url
end
