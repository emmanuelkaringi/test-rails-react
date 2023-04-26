require "test_helper"

class ThaughtsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @thaught = thaughts(:one)
  end

  test "should get index" do
    get thaughts_url
    assert_response :success
  end

  test "should get new" do
    get new_thaught_url
    assert_response :success
  end

  test "should create thaught" do
    assert_difference("Thaught.count") do
      post thaughts_url, params: { thaught: { body: @thaught.body, title: @thaught.title } }
    end

    assert_redirected_to thaught_url(Thaught.last)
  end

  test "should show thaught" do
    get thaught_url(@thaught)
    assert_response :success
  end

  test "should get edit" do
    get edit_thaught_url(@thaught)
    assert_response :success
  end

  test "should update thaught" do
    patch thaught_url(@thaught), params: { thaught: { body: @thaught.body, title: @thaught.title } }
    assert_redirected_to thaught_url(@thaught)
  end

  test "should destroy thaught" do
    assert_difference("Thaught.count", -1) do
      delete thaught_url(@thaught)
    end

    assert_redirected_to thaughts_url
  end
end
