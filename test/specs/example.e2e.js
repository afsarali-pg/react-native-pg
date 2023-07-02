
const MenuPage = require("../pageobjects/menu.page")

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        
        await MenuPage.hamburgerMenu.click();
        await expect(MenuPage.signupLoginButton).toBeExisting();
        await expect(MenuPage.mortgageTab).toBeExisting();
        
    })
})


