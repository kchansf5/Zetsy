class Api::ShoppingCartItemController < ApplicationController

  def index
    @shopping_cart_items = ShoppingCartItem.where(user_id: current_user.id)
  end

  def show
    @shopping_cart_item = ShoppingCartItem.find(params[:id])
  end

  def create
    # debugger
    @shopping_cart_item = ShoppingCartItem.new(shopping_cart_item_params)
    @shopping_cart_item.user_id = current_user.id

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
  end

  def destroy
    @shopping_cart_item = current_user.ShoppingCartItem.find(params[:id])
    @shoppingcart_item.destroy
    render :show
  end

  private

  def shopping_cart_item_params
    params.require(:item).permit(:product_id, :quantity)
  end

end
