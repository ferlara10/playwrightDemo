

export class BSHomePage {

    constructor(page){
        this.page = page;
        this.getStartedFreeButton = page.locator("[id='signupModalProductButton']");
        this.contactSalesButton = page.locator("//div[@id='customers_section_cta_variation']//button");
        //this.contactSalesButton = page.locator("xpath=//section[@id='heroUnitMainSection']//button[normalize-space()='Contact Sales']");

    }

    async goto(){
        await this.page.goto('https://www.browserstack.com/');
    }
    
    async getStartedFreeButtonClick(){
        await this.getStartedFreeButton.click();
    }
    
    async contactSalesButtonClick(){
        await this.contactSalesButton.scrollIntoViewIfNeeded();
        await this.contactSalesButton.click();
    }
}