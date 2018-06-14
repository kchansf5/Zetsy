class Api::ShoppingCartItemController < ApplicationController

  def index
    @shopping_cart_items = ShoppingCartItem.where(user_id: current_user.id)
  end

  def show
    @shopping_cart_item = ShoppingCartItem.find(params[:id])
  end

  def create
    @shopping_cart_item = ShoppingCartItem.find_by(product_id: params[:item][:product_id], user_id: current_user.id)

    if @shopping_cart_item
      p @shopping_cart_item
      @shopping_cart_item.quantity += (params[:item][:quantity]).to_i
      @shopping_cart_item.save
      p @shopping_cart_item
      render :show


    else

      @shopping_cart_item = ShoppingCartItem.new(shopping_cart_item_params)
      @shopping_cart_item.user_id = current_user.id

      if @shopping_cart_item.save
        render :show
      else
        render json: @shopping_cart_item.errors.full_messages, status: 422
      end
    end
  end

  def update
    @shopping_cart_item = ShoppingCartItem.find(params[:id])
    if @shopping_cart_item.update(shopping_cart_item_params)
      render :show
    else
      render json: @shopping_cart_item.errors.full_messages, status: 422
    end
  end

  def destroy
    @shopping_cart_item = ShoppingCartItem.find(params[:id])
    @shopping_cart_item.destroy
    render :show
  end

  private

  def shopping_cart_item_params
    params.require(:item).permit(:product_id, :quantity)
  end

end
