class CreateShoppingCartItems < ActiveRecord::Migration[5.1]
  def change
    create_table :shopping_cart_items do |t|
      t.integer :product_id, null: false
      t.integer :user_id, null: false
      t.integer :quantity, null: false

      t.timestamps
    end
    add_index :shopping_cart_items, [:user_id, :product_id], unique: true
  end
end
