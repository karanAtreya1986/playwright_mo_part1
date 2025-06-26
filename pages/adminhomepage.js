//
class adminpage {

    constructor(page) {
        this.page = page;
        this.addbutton = page.getByText("Add")
        this.firstselectdropdown=page.getByText('-- Select --')
        this.secondselectdropdown=page.getByText('-- Select --')
        this.employeename = page.getByPlaceholder("Type for hints...")
        this.username = page.locator("(//input[@class='oxd-input oxd-input--active'])[2]")
        this.password = page.locator("(//input[@type='password'])[1]")
        this.confirmpassword = page.locator("(//input[@type='password'])[2]")
        this.savebutton=page.locator("//button[normalize-space()='Save']")
    }

    async clickonaddbutton() {
        await this.addbutton.click()
    }

    async enterthedetails(userrole, empname, status, username, password, confirmpassword) {

        await this.firstselectdropdown.first().click();
        //smart pw doesnt need like crazy java all concat strings for dynamic xpaths.
        //directly specify the variable name.
        await this.page.getByRole('option', { name: userrole }).click();
        await this.secondselectdropdown.click();
        await this.page.getByRole('option', { name: status}).click();
        await this.employeename.click()
        await this.employeename.fill(empname)
         // Use keyboard to wait for and select the first suggestion
  await this.page.waitForTimeout(1000); // Wait briefly for dropdown to populate (adjust if needed)
  await this.page.keyboard.press('ArrowDown'); // Select first option
  await this.page.keyboard.press('Enter');     // Confirm selection
        // await this.page.waitForTimeout(2000)
        // await this.employeename.getByText(empname).click();
        
        // await this.employeename.getByText('t').click();


        await this.username.fill(username)
        await this.password.fill(password)
        await this.confirmpassword.fill(confirmpassword)
        
        await this.page.pause()

        await this.savebutton.click()


    }
}
module.exports=adminpage;