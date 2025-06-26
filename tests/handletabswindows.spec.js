/**
 * 
 */
const{test, expect}=require("@playwright/test")

//we directly pass browser fixture here.
test("@regression handle window or tabs", async({browser})=>{

    //creating browser context
  let browsercontext=  await browser.newContext();

  //create new page
  let newpage=await browsercontext.newPage()

  await newpage.goto("https://ineuron-courses.vercel.app/login");

  //use promise to wait for the page to load and then perform the click operation.
  let [newpage1]=await Promise.all(
    [
        browsercontext.waitForEvent("page"),
        //click on the twitter link on the login page of ineuron.
        newpage.locator("//a[@href='https://twitter.com/iNeuronAi']//img").click()
    ]
  )

  //wait for twitter url to open
  const url=await newpage1.url()
  console.log("url is " + url)

  //lets use some words from ui in ineuron login page
  //we want to capture ineuronAI
  const newwordfromurl=url.split("com")[1].substring(1)

  //we dont have to go back to older page like selenium
  //we only have to use the name which we used to refer to original page
  await newpage.locator("//input[@id='email1']").click()
  await newpage.locator("//input[@id='email1']").type(newwordfromurl)

})