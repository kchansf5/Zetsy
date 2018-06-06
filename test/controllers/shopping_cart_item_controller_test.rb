require 'test_helper'

class ShoppingCartItemControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get shopping_cart_item_new_url
    assert_response :success
  end

  test "should get create" do
    get shopping_cart_item_create_url
    assert_response :success
  end

  test "should get show" do
    get shopping_cart_item_show_url
    assert_response :success
  end

  test "should get destroy" do
    get shopping_cart_item_destroy_url
    assert_response :success
  end

  test "should get edit" do
    get shopping_cart_item_edit_url
    assert_response :success
  end

  test "should get update" do
    get shopping_cart_item_update_url
    assert_response :success
  end

end
