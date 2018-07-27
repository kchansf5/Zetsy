class Api::SearchController < ApplicationController
  def index
    @search_items = Product.search_name(params[:peanut])    
  end
end
