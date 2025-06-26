/**
 * 
 */
let{test,expect,chromium}=require("@playwright/test")

//hooks for pre-running and post run.
let page
let browser
let context

//beforeall requires hook function
test.beforeAll(async()=>{
  browser =await chromium.launch({headless:false})
    context= await browser.newContext({recordVideo:{dir: "./videos"}})
    page=await context.newPage()
})

//afterAll requires hook function
test.afterAll(async()=>{
await page.close()
    await browser.close()
    await context.close()
})




test("another way to launch browser with specific settings", async()=>{

   

   await page.goto("https://ineuron-courses.vercel.app/login")
   await page.getByPlaceholder("Email").click()
   await page.getByPlaceholder("Email").fill("m9@gmail.com")
   await page.getByPlaceholder("Password").fill("m9@gmail.com")
   await page.getByRole("button", {name: "Sign in"}).click();
  await  expect (page).toHaveURL("https://ineuron-courses.vercel.app/")
   await page.getByRole("button", {name: "Sign out"}).click();
   await expect (page).toHaveURL("https://ineuron-courses.vercel.app/login")


    


})

    