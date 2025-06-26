//

const{test, expect}=require("@playwright/test")

test("handle auto suggestion without alltextcontents", async({page})=>{

    //goto page
    await page.goto("https://www.google.com/")

    await page.pause()

    //search in google search box with delay.
    await page.locator("//textarea[@name='q']").type("mukesh otwani", {delay:2000})

    //captures all the values seen on dom in variable.
    const elements=await page.locator("//div[@role='option']")

    //get the count of elements
    const count=await elements.count()

    //log the count
    console.log("total count " + count)

    //for loop to iterate.
    for(let i=0;i<count;i++){

        //get the value one by one
        const textvalue=await elements.nth(i).textContent()

        //print the value
        console.log(textvalue)

        //if text value is api click on it and break
        if(textvalue.includes("api")){
            elements.nth(i).click()
            break;
        }
    }

    //validate if title of page contains api
    await expect(page).toHaveTitle(/.*api/)

})