//

class login{

    //in constructor keep only fixtures not method parameters
    //so we separated out the method for username and password.
    constructor(page){
        //without this keyword on the page. this.page=page.we get errors like 
        //TypeError: Cannot read properties of undefined (reading 'goto')
        this.page=page;
        this.username=page.getByPlaceholder("Username")
        this.password=page.getByPlaceholder("Password")
        // this.signinbutton=page.getByText("Sign in")
        this.signinbutton=page.getByRole('button', { name: ' Login ' })
    }

    //login using username and password
    async logintoapplication(username, password){
        await this.page.pause()
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // await this.page.goto("https://www.opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await this.username.type(username)
        await this.password.type(password)
        //click on first sign in button
        // await this.signinbutton.nth(1).click()
        await this.signinbutton.click()
    }

}

module.exports=login;
