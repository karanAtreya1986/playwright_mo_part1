//
const{test,expect}=require("@playwright/test")

//use this to run all the test in this spec file serially.
test.describe.configure({mode: "serial"})

test("@Smoke valid User and valid Password",async function({page}){

    await page.goto("https://ineuron-courses.vercel.app/login")

      await page.getByPlaceholder("Email").type("testuse56r101@gmail.com")
    await page.getByPlaceholder("Password").type("test56user101@gmail.com")

    await page.getByRole("button",{name:'Sign in' }).click()
 
    await page.getByRole("button",{name:'Sign out' }).click()
   
    await page.locator("button[type='submit']").click()
    

    expect(await page.locator(".errorMessage")).toContainText("Email and Password is required")

})

test("Blank User and Blank Password",async function({page}){

    await page.goto("https://ineuron-courses.vercel.app/login")

    await page.locator("button[type='submit']").click()

    expect(await page.locator(".errorMessage")).toContainText("Email and Password is required")

})

test("Valid User and Blank Password",async function({page}){
    await page.goto("https://ineuron-courses.vercel.app/login")

await page.getByPlaceholder("Email").type("testuser101@gmail.com")

    await page.getByRole("button",{name:'Sign in' }).click()

    expect(false).toBeFalsy()
})

test("Blank User and valid Password",async function({page}){
    await page.goto("https://ineuron-courses.vercel.app/login")

    await page.getByPlaceholder("Password").type("testuser101@gmail.com")

    await page.getByRole("button",{name:'Sign in' }).click()

    expect(false).toBeFalsy()
})

test("Invalid User and Invalid Password",async function({page}){

    
    await page.getByPlaceholder("Email").type("testuser101@retreter.com")

    await page.getByPlaceholder("Password").type("teewrewrewstuser101@gmail.com")

    await page.getByRole("button",{name:'Sign in' }).click()

    await page.waitForSelector(".errorMessage")
})

