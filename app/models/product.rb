class Product < ApplicationRecord
  include PgSearch
  pg_search_scope :search_name,
                  :against =>
                  [:product_name, :description, :category],
                  :using => {
                    :tsearch => {
                      :prefix => true,
                      :any_word => true,
                    }
                  }
  validates :product_name, :description, :price, :category, :image_url, presence: true

  has_many :shopping_cart_items
end
