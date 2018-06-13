@shopping_cart_items.each do |item|
  json.set! item.id do
    json.extract! item, :user_id, :product_id, :quantity
  end
end
