//
import {test, expect} from '@playwright/test'

//get data from json file.
let v1=require("../tests/testdata/mytestdata.json")
//convert to json string
let v2= JSON.stringify(v1);
//now to parse the json we need to use parse so we can use json.parse
let data=JSON.parse(v2)

test("login logout with the test data", async({page})=>{

    //go to page
    await page.goto("https://ineuron-courses.vercel.app/");

    //click login
    await page.getByText("Log in ").click()

    //check url
    await expect(page).toHaveURL("https://ineuron-courses.vercel.app/login");

    //type user name , password
    await page.getByPlaceholder("Email").type(data.username)
    await page.getByPlaceholder("Password").type(data.password)

    //click sign in button and check url once signed in
    await page.getByRole("button",{name:'Sign in' }).click()
    await expect(page).toHaveURL("https://ineuron-courses.vercel.app/")

    //click on sign out button and check url once signed out
    await page.getByRole("button",{name:'Sign out' }).click()
    await expect(page).toHaveURL("https://ineuron-courses.vercel.app/login")
})