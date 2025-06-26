//
//You wont get pw auto suggestion in normal js page files.
//We can have locators in const or in methods.

//first create class
class dashboard {

    //constructor of class
    //pass in page context
    //manage link locator
    //manage users locator.
    constructor(page) {
        this.page = page;
        this.adminlink = page.locator("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='Admin']")
        this.getfirstusername=page.locator("(//div[@role='cell'])[4]")
    }

    async clickonadminlink() {
       await this.adminlink.click()
       const usernametext= await this.getfirstusername.textContent();
       return usernametext;
    }
}

//use the class name here.
module.exports = dashboard;
