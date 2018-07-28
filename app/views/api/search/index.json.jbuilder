@search_items.each do |product|
  json.set! product.id do
    json.extract! product, :id, :product_name, :price, :image_url, :category
  end
end
