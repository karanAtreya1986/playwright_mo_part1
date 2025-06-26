/**
 * 
 */


const {test, expect}=require("@playwright/test")

//js prompt, we enter value and click ok
test("js prompt and we enter value and click ok", async({page})=>{
    //click js confirm
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    //handle event to enter value and click ok
    //check message inside js.
await page.on("dialog",async(listen1)=>{
    expect (listen1.message()).toContain("I am a JS prompt")
    listen1.accept("playwright")
})

//click js prompt button and then click accept
await page.getByText("Click for JS Prompt").click()
//get the text content
var textcontentmesssage=await page.locator("#result").textContent()
//assert and check if includes returns true.
expect (textcontentmesssage.includes("You entered: playwright")).toBeTruthy()

})

//js prompt, we enter value and click cancel
test("js prompt and we enter value and click cancel", async({page})=>{
    //click js confirm
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    //handle event to enter value and click cancel
    //check message inside js.
await page.on("dialog",async(listen1)=>{
    expect (listen1.message()).toContain("I am a JS prompt")
    listen1.dismiss()
})

//click js prompt button and then click cancel
await page.getByText("Click for JS Prompt").click()
//get the text content
var textcontentmesssage=await page.locator("#result").textContent()
//assert and check if includes returns true.
expect (textcontentmesssage.includes("You entered: null")).toBeTruthy()

})



//pw auto handles all js alerts.
//it will auto click on cancel in js prompt when we dont use handlers.
test.only("handle js prompt automatically", async function({page}){
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    //click on this button on the webpage.
    await page.getByText("Click for JS Prompt").click()

    //message displayed as - you clicked on cancel.
    await expect(page.locator("//p[@id='result']")).toBeVisible()

})