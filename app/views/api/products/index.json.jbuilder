@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :product_name, :price, :image_url
  end
end
