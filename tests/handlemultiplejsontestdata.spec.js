//

//how to use import instead of require.
import{test,expect} from "@playwright/test"

//store multiple test data in form of json array
const v1=[
    {
        "username":"ineuron@ineuron.ai",
        "password":"ineuron"
    },
    {
        "username":"sample9@gmail.com",
        "password":"sample9@gmail.com"
    },
    {
        "username":"testuser101@gmail.com",
        "password":"testuser101@gmail.com"
    }
]

//same test only with multiple data.
test("check with multiple test data", async({page})=>{
    for (const data of v1) {
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



