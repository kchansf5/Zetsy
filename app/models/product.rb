class Product < ApplicationRecord
  validates :product_name, :description, :price, :category, :image_url, presence: true

  has_many :shopping_cart_items
end
