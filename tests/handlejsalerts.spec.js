/**
 * 
 */

const {test, expect}=require("@playwright/test")

//pw auto handles all js alerts.
//it will auto click on accept, cancel etc.
test.skip("handle js alert automatically", async function({page}){
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    //click on this button on the webpage.
    await page.getByText("Click for JS Alert").click()

    //check the message is displayed after clicking on ok in js alert.
    //we didnt do any operation inside alert itself.
    await expect(page.locator("//p[@id='result']")).toBeVisible()

})

//you want to manually click on accept, decline.
test.skip("handle js alert manually", async function({page}){
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    //wait for the alert dialog when we are on that alert.
    //so we need to use the event as dialog.
    //click on accept in the dialog.
    await page.on("dialog",async(jsdialog)=>{
        jsdialog.accept();
    })

    //now click on the alert button on webpage.
    //as soon as alert comes, the above event will be triggered.
    await page.getByText("Click for JS Alert").click()

   //same verification for text message.
    await expect(page.locator("//p[@id='result']")).toBeVisible()
})


//change location of event handler after clicking on button.
test.skip("handle js alert manually and change location of event handler", async function({page}){
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")


    await page.getByText("Click for JS Alert").click()

 //location works even after when we write after clicking on button.
    await page.on("dialog",async(jsdialog)=>{
        jsdialog.accept();
    })

   //same verification for text message.
    await expect(page.locator("//p[@id='result']")).toBeVisible()
})

//capture text after clicking on js alert
test.skip("capture text after clicking on js alert", async function({page}){
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")


    await page.getByText("Click for JS Alert").click()

 //location works even after when we write after clicking on button.
    await page.on("dialog",async(jsdialog)=>{
        jsdialog.accept();
    })

   //capture the message displayed on browser after click.
    const jsalertmessage=await page.locator("//p[@id='result']").textContent()
     jsalertmessage.includes("successfully clicked an alert")
})


//capture text inside the js alert
test.skip("capture text inside the js alert", async function({page}){
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")


    await page.getByText("Click for JS Alert").click()

 //capture the text here
 let jsalertmessage1;   
 let jsalertmessage2; 
 let jsalertmessage3;
    await page.on("dialog",async(jsdialog)=>{
        jsalertmessage1=jsdialog.message()
        expect (jsalertmessage1.includes("I am a JS Alert"));
         jsalertmessage2=jsdialog.toString();
        jsalertmessage3= jsdialog.message()
        console.log(jsalertmessage1)
        console.log(jsalertmessage2)
        console.log(jsalertmessage3)
        jsdialog.accept();
    })

   //capture the message displayed on browser after click.
    const jsalertmessage=await page.locator("//p[@id='result']").textContent()
     jsalertmessage.includes("successfully clicked an alert")

     console.log(jsalertmessage1) //undefined, need to handle dialog before event so it captures value.
     console.log(jsalertmessage2) //undefined
     console.log(jsalertmessage3) //undefined
})

//capture text inside jsalert but event has to be written first
test.only("capture text inside jsalert but event has to be written first", async function({page}){
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
 //capture the text here
 let jsalertmessage1;  
 let jsalertmessage2;
 let jsalertmessage3;

await page.on("dialog",async(jsdialog)=>{
        jsalertmessage1=jsdialog.message()
        expect (jsalertmessage1.includes("I am a JS Alert"));
        jsalertmessage2=jsdialog.toString();
        jsalertmessage3= jsdialog.message()
        console.log(jsalertmessage1)//I am a JS Alert
        console.log(jsalertmessage2)//[object Object], to string returns object.
        console.log(jsalertmessage3)//I am a JS Alert
        jsdialog.accept();
    })

    await page.getByText("Click for JS Alert").click()

   //capture the message displayed on browser after click.
    const jsalertmessage=await page.locator("//p[@id='result']").textContent()
     jsalertmessage.includes("successfully clicked an alert")

     console.log(jsalertmessage1) //I am a JS Alert
     console.log(jsalertmessage2) //[object Object], to string returns object.
     console.log(jsalertmessage3) //I am a JS Alert
})