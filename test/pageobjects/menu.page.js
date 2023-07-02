class MenuPage {
    // Menu elements
    get hamburgerMenu() { return $(`//*[@resource-id='com.allproperty.android.consumer.sg.debug:id/toolbar']/android.widget.ImageButton[1]`); }
    get logoutButton() { return $(`//*[@resource-id='com.allproperty.android.consumer.sg.debug:id/drawer_logout']`); }
    get signupLoginButton() { return $(`//*[@resource-id='com.allproperty.android.consumer.sg.debug:id/drawer_login']`); }

    // Search-related elements
    get searchButton() { return $(`//*[@resource-id='com.allproperty.android.consumer.sg.debug:id/search_button']`); }
    get saleButton() { return $(`//*[@resource-id='com.allproperty.android.consumer.sg.debug:id/tab_layout']/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]`); }
    get rentButton() { return $(`//*[@resource-id='com.allproperty.android.consumer.sg.debug:id/tab_layout']/android.widget.LinearLayout[1]/android.widget.LinearLayout[2]`); }
    get filterByTypeButton() { return $(`//*[@resource-id='com.allproperty.android.consumer.sg.debug:id/dropdown_type']`); }
    get filterByPriceButton() { return $(`//*[@resource-id='com.allproperty.android.consumer.sg.debug:id/dropdown_price']`); }
    get filterByBedRoomsButton() { return $(`//*[@resource-id='com.allproperty.android.consumer.sg.debug:id/dropdown_beds']`); }
  }
  
  module.exports = new MenuPage();
  