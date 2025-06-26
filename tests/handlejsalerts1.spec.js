/**
 * 
 */


const {test, expect}=require("@playwright/test")

//js confirm and check message and click on accept
test("js confirm and check message and click on accept", async({page})=>{
    //click js confirm
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    //handle event to accept
await page.on("dialog",async(listen1)=>{
    expect (listen1.message()).toContain("I am a JS Confirm")
    listen1.accept()
})

//click js confirm button and then click accept
await page.getByText("Click for JS Confirm").click()
//get the text content
var textcontentmesssage=await page.locator("#result").textContent()
//assert and check if includes returns true.
expect (textcontentmesssage.includes("You clicked: Ok")).toBeTruthy()

})

//js confirm and check message and click on dismiss
test.only("js confirm and check message and click on dismiss", async({page})=>{
    //click js confirm
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    //handle event to dismiss
await page.on("dialog",async(listen1)=>{
    expect (listen1.message()).toContain("I am a JS Confirm")
    listen1.dismiss()
})

//click js confirm button and then click dismiss
await page.getByText("Click for JS Confirm").click()
//get the text content
var textcontentmesssage=await page.locator("#result").textContent()
//assert and check if includes returns true.
expect (textcontentmesssage.includes("You clicked: Cancel")).toBeTruthy()
})



//pw auto handles all js alerts.
//it will auto click on cancel in js prompt when we dont use handlers.
test.only("handle js confirm automatically", async function({page}){
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    //click on this button on the webpage.
    await page.getByText("Click for JS Confirm").click()

    //message displayed as - you clicked on cancel.
    await expect(page.locator("//p[@id='result']")).toBeVisible()

})