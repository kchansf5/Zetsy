class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :product_name, null: false
      t.string :description, null: false
      t.float :price, null: false
      t.string :image_url, null: false
      t.timestamps
    end
    add_index :products, :product_name, unique: true
  end
end
