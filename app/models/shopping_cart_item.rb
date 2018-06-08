class ShoppingCartItem < ApplicationRecord
  validates :product_id, :user_id, :quantity, presence: true

  has_many :products
end
