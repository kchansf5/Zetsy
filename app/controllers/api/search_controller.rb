class Api::SearchController < ApplicationController
  def index
    debugger
    @search_items = Product.search_name(params[:query])
    render 'api/search/index'
  end
end
