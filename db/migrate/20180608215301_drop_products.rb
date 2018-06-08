class DropProducts < ActiveRecord::Migration[5.1]
  def change
    drop_table :products
  end
end
