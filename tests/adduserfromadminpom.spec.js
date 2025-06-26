//
//first is import
import { test, expect } from "@playwright/test"

//then all page class to be imported
const dashboardpage = require("../pages/dashboardpage")
const adminhomepage = require("../pages/adminhomepage")
const loginpage = require("../pages/loginpage")

//add a user from admin
test("add user from admin", async ({ page }) => {
    //create objects of the classes
    //we need to use the variables above with require for new objects not the original class name
    const home = new adminhomepage(page)
    const login = new loginpage(page)
    const dashboard = new dashboardpage(page)

    //open the application
    await login.logintoapplication("Admin", "admin123")
    //check if the url contains dashboard word
    await expect(page).toHaveURL(/.*dashboard/)
})

//add user now
test("add user from admin page", async ({ page }) => {

    const home = new adminhomepage(page)
    const login = new loginpage(page)
    const dashboard = new dashboardpage(page)

    await login.logintoapplication("Admin", "admin123")

   let usernametext= await dashboard.clickonadminlink()

    

    await home.clickonaddbutton()

    await home.enterthedetails("ESS", usernametext, "Enabled", "tester123458", "tester123456", "tester123456")

    // Now check that the Reset button is visible
    const resetButton = await page.getByRole('button', { name: 'Reset' });
    await expect(resetButton).toBeVisible();

})