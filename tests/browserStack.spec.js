const { test, expect } = require('../fixtures/baseTest');



test('navigation signup page', async({page, homePage}) => {
    await homePage.getStartedFreeButtonClick();
    await expect(page).toHaveURL('https://www.browserstack.com/users/sign_up');
});

test('navigation contact sales page', async({page, salesPage}) => {
    let locator  = await salesPage.getFormElement();
    expect(page.locator(locator).first()).toBeVisible({timeout:10000});
});

test('error in sigup form', async({page, signUpPage}) => {
    
    await signUpPage.fillForm('Luis', 'playwright@microsoft.com', "123456", false);
    let locator = await signUpPage.getErrorMessage();
    expect(page.locator(locator)).toHaveText("Please check the box to confirm acceptance of our Terms of Service and Privacy Policy ");
});


