/**
 * 
 */

const{test,expect}=require("@playwright/test")

//wait for load state with network idle, load, dom load options.
test("wait for all checkbox apis to load on the webpage and then proceed.", async({page})=>{

    await page.goto("https://ineuron-courses.vercel.app/login");

    await page.waitForTimeout(5000)

await page.getByText("New user? Signup").click()

//there are three options.
//dom to be loaded.
//network idle till apis are loaded.
//load method till page loads.
await page.waitForLoadState("networkidle")

//we have to use wait for selector to load all the apis on the page else error.
await page.waitForSelector("//label[@class='interest']")

//we will capture all interest in a locator and get the count.
let interestlocator=await page.locator("//label[@class='interest']").count()
console.log(interestlocator)
await page.waitForTimeout(5000)
expect (interestlocator).toBe(12);
})