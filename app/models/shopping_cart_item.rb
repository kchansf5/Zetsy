class ShoppingCartItem < ApplicationRecord
  validates :product_id, :user_id, :quantity, presence: true

  belongs_to :user
  belongs_to :product
end
