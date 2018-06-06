require 'test_helper'

class Api::ReviewControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get api_review_new_url
    assert_response :success
  end

  test "should get create" do
    get api_review_create_url
    assert_response :success
  end

  test "should get edit" do
    get api_review_edit_url
    assert_response :success
  end

  test "should get update" do
    get api_review_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_review_destroy_url
    assert_response :success
  end

end
