class Product < ApplicationRecord
  validates :product_name, :description, :price, :image_url, presence: true
  
end
