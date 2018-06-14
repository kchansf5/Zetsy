@shopping_cart_items.each do |item|
  json.set! item.id do
    json.extract! item, :user_id, :product_id, :quantity
    json.name item.product.product_name
    json.image_url item.product.image_url
  end
end
