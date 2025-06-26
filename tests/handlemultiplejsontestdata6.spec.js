// //

// import{test,expect} from "@playwright/test"

// let v1=require("./testdata/multipletestdata1.json")
// let v2= JSON.stringify(v1);
// let v3=JSON.parse(v2)

// //same test only with multiple data.
// //compile error when for loop is outside and we do data driven.
// //what happens, it runs same test multiple times with same name.
// //so thats why we need concat with some unique primary key for every test.
//  for (const data of v3) {
// test("check with multiple test data and for loop outside", async({page})=>{
   
//         await page.goto("https://ineuron-courses.vercel.app/")

//         await page.getByText("Log in").click()
//         await expect(page).toHaveURL('https://ineuron-courses.vercel.app/login')

//         await page.getByPlaceholder("Email").type(data.username)
//         await page.getByPlaceholder("Password").type(data.password)

//         await page.getByRole("button",{name:'Sign in' }).click()
//          await expect(page).toHaveURL("https://ineuron-courses.vercel.app/")

//          await page.getByRole("button",{name:'Sign out' }).click()
//     await expect(page).toHaveURL("https://ineuron-courses.vercel.app/login")

//     })
// }



