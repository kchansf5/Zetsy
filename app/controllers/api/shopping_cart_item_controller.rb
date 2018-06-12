class Api::ShoppingCartItemsController < ApplicationController

  def index
    @shopping_cart_items = ShoppingCartItem.all
  end

  def show
    @shopping_cart_item = ShoppingCartItem.find(params[:id])
  end

  def create
    @shopping_cart_item = ShoppingCartItem.new(shopping_cart_item_params)

    if @shopping_cart_item.save
      render :show
    else
      render json: @shopping_cart_item.errors.full_messages, status: 422
    end
  end

  def update
    @shopping_cart_item = ShoppingCartItem.find(params[:id])
    if @shopping_cart_item.update(shopping_cart_item_params)
      render json: @shopping_cart_item
    else
      render json: @shopping_cart_item.errors.full_messages, status: 422
  end

  def destroy
    @shopping_cart_item = current_user.ShoppingCartItem.find(params[:id])
    @shoppingcart_item.destroy
    render :show
  end

  private

  def shopping_cart_item_params
    params.require(:shoppingCartItem).permit(:product_id, :user_id, :quantity)
  end
end
