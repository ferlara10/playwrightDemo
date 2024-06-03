

const base = require('@playwright/test');
const { BSHomePage } = require('../pages/bsHome-page');
const { BSSignUpPage } = require('../pages/bsSignUp-page');
const { BSSalesPage } = require('../pages/bsSales-page');


exports.expect = base.expect;


exports.test = base.test.extend({
    homePage : async({page}, use ) => {
        const homePage = new BSHomePage(page);
        await homePage.goto();
        await use(homePage);
    }, 
    signUpPage : async({page}, use) => {
        const homePage = new BSHomePage(page);
        homePage.goto();
        homePage.getStartedFreeButtonClick();
        const signUpPage = new BSSignUpPage(page);
        await use(signUpPage);
    },
    salesPage : async({page}, use) => {
        const homePage = new BSHomePage(page);        
        await homePage.goto();
        await homePage.contactSalesButtonClick();
        const salesPage = new BSSalesPage(page);
        await use(salesPage);
    }
});