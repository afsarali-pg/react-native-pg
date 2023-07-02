class MenuPage {
    // Menu elements
    get hamburgerMenu() { return $(`//*[@resource-id='hamburgerIcon']`); }
    get logoutButton() { return $(`//*[@resource-id='loginSignUpBtn']`); }
    get signupLoginButton() { return $(`//*[@resource-id='loginSignUpBtn']`); }

    get mortgageTab() { return $(`//*[@resource-id='homeFinanceTab']`); }

    // Search-related elements
    get searchButton() { return $(`//*[@resource-id='com.allproperty.android.consumer.sg.debug:id/search_button']`); }
    get saleButton() { return $(`//*[@resource-id='com.allproperty.android.consumer.sg.debug:id/tab_layout']/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]`); }
    get rentButton() { return $(`//*[@resource-id='com.allproperty.android.consumer.sg.debug:id/tab_layout']/android.widget.LinearLayout[1]/android.widget.LinearLayout[2]`); }
    get filterByTypeButton() { return $(`//*[@resource-id='com.allproperty.android.consumer.sg.debug:id/dropdown_type']`); }
    get filterByPriceButton() { return $(`//*[@resource-id='com.allproperty.android.consumer.sg.debug:id/dropdown_price']`); }
    get filterByBedRoomsButton() { return $(`//*[@resource-id='com.allproperty.android.consumer.sg.debug:id/dropdown_beds']`); }
  }
  
  module.exports = new MenuPage();
  