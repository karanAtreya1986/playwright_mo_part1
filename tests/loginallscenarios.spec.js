
/**
 * run in headed mode with all properties on.
 */
const{test,expect}=require("@playwright/test")

//toContainText validation to check the text on webpage.
test("blank username and password", async function({page}){
    await page.goto("https://ineuron-courses.vercel.app/login")
    await page.locator("//button[normalize-space()='Sign in']").click()
    expect (await  page.locator(".errorMessage")).toContainText("Email and Password is required")
})