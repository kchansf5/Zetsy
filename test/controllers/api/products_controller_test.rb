require 'test_helper'

class Api::ProductsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_products_show_url
    assert_response :success
  end

end
