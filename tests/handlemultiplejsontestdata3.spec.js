//


import{test,expect} from "@playwright/test"


let v1=require("../tests/testdata/multipletestdata1.json")
let v2= JSON.stringify(v1);
let v3=JSON.parse(v2)

//same test only with multiple data but id field is added to identify every test case uniquely.
    for (const data of v3) {

        test("multiple data with id " + data.id, async({page})=>{

        await page.goto("https://ineuron-courses.vercel.app/")

        await page.getByText("Log in").click()
        await expect(page).toHaveURL('https://ineuron-courses.vercel.app/login')

        await page.getByPlaceholder("Email").type(data.username)
        await page.getByPlaceholder("Password").type(data.password)

        await page.getByRole("button",{name:'Sign in' }).click()
         await expect(page).toHaveURL("https://ineuron-courses.vercel.app/")

         await page.getByRole("button",{name:'Sign out' }).click()
    await expect(page).toHaveURL("https://ineuron-courses.vercel.app/login")
    })
}