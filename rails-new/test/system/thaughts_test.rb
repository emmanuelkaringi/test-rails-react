require "application_system_test_case"

class ThaughtsTest < ApplicationSystemTestCase
  setup do
    @thaught = thaughts(:one)
  end

  test "visiting the index" do
    visit thaughts_url
    assert_selector "h1", text: "Thaughts"
  end

  test "should create thaught" do
    visit thaughts_url
    click_on "New thaught"

    fill_in "Body", with: @thaught.body
    fill_in "Title", with: @thaught.title
    click_on "Create Thaught"

    assert_text "Thaught was successfully created"
    click_on "Back"
  end

  test "should update Thaught" do
    visit thaught_url(@thaught)
    click_on "Edit this thaught", match: :first

    fill_in "Body", with: @thaught.body
    fill_in "Title", with: @thaught.title
    click_on "Update Thaught"

    assert_text "Thaught was successfully updated"
    click_on "Back"
  end

  test "should destroy Thaught" do
    visit thaught_url(@thaught)
    click_on "Destroy this thaught", match: :first

    assert_text "Thaught was successfully destroyed"
  end
end
