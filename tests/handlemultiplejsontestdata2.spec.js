//

//how to use import instead of require.
import{test,expect} from "@playwright/test"

//store multiple test data in form of json array.
//in multiple test data give unique name to each test case, so we can track easily in report.
//store multiple data separately.
let v1=require("../tests/testdata/multipletestdata.json")
let v2= JSON.stringify(v1);
let v3=JSON.parse(v2)

//same test only with multiple data.
test("check with multiple test data", async({page})=>{
    for (const data of v3) {
        await page.goto("https://ineuron-courses.vercel.app/")

        await page.getByText("Log in").click()
        await expect(page).toHaveURL('https://ineuron-courses.vercel.app/login')

        await page.getByPlaceholder("Email").type(data.username)
        await page.getByPlaceholder("Password").type(data.password)

        await page.getByRole("button",{name:'Sign in' }).click()
         await expect(page).toHaveURL("https://ineuron-courses.vercel.app/")

         await page.getByRole("button",{name:'Sign out' }).click()
    await expect(page).toHaveURL("https://ineuron-courses.vercel.app/login")

    }
})



