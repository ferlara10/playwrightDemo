

export class BSSignUpPage{

    

    constructor(page){
        this.page = page;
        this.headingUp = page.getByRole('heading', {name:'Create a FREE Account'});
        this.name = page.getByPlaceholder('Full name');
        this.email = page.getByPlaceholder('Business Email');
        this.password = page.getByPlaceholder('Password');
        this.submitButton = page.locator("#user_submit");
        this.agreeCheckbox = page.locator("#tnc_checkbox");       
        this.errorMessageLabel = page.locator("#bs-alert-text-id");
    }


    async fillForm(name, email, password, isCheckboxCheck){

        await this.name.fill(name);
        await this.email.first().fill(email);
        await this.password.fill(password);
        if (isCheckboxCheck)
            await this.agreeCheckbox.check();

        await this.page.keyboard.press("Enter");

        if(await this.errorMessageLabel.isVisible({timeout: 10000}))
            return await this.errorMessageLabel.textContent();

        return "";
    }

    async getErrorMessage(){
        return "#bs-alert-text-id";
    }
}