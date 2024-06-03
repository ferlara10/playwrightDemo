
export class BSSalesPage {

    constructor(page){
        this.page = page;
        this.form = page.locator('#popUpContactUsModalForm').first();
    }

    async getFormElement(){
        return '#popUpContactUsModalForm';
    }

}