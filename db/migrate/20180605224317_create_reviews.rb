class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.string :comment, null: false
      t.integer :rating, null: false
      t.integer :product_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :reviews, [:user_id, :product_id], unique: true
  end
end
