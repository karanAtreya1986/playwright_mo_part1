/**
 * 
 */

const{test,expect}=require("@playwright/test")

//handle frames with framelocator, or frame or frames.
test("handling frames", async({page})=>{

    //visit this page.
    await page.goto("https://ineuron-courses.vercel.app/practise")

    //use frame locator and pass in locator of the element.
    //wait for frame to be ready.
    const myframe=await page.frameLocator("//iframe[contains(@src,'ineuron')]")
    // page.frame("frame name to be given here)"
    // page.frames("give frame in array format")
    page.frames()

    //click on login inside iframe.
    await myframe.getByText("Log in ").click();

})


//handle nested frames.
test("handling nested frames", async({page})=>{

    //visit this page.
    await page.goto("https://ineuron-courses.vercel.app/practise")

    //wait for first frame.
    let f1=await page.frameLocator("//iframe[contains(@src,'ineuron')]")
var f2= f1.frameLocator('second frame')
const f3= f2.frameLocator('third frame')

//then perform operation on the frames and to come out of frames
//no need of switch
//directly use page because it points to the original page.

})


/*
        Complete login within iframe
*/
 
// use this for nested frames in playwright
 //await myframe.frameLocator("")