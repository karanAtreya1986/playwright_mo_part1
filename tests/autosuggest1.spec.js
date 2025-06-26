//

const{test, expect}=require("@playwright/test")

//use for each loop.
test("@Smoke handle auto complete suggestions like google search", async({page})=>{
    
    await page.goto("https://www.google.com/");

    await page.pause();

    //goto google search and type and slowly type hence delay.
    await page.locator("//textarea[@id='APjFqb']").type("Mukesh Otwani", {delay:200})

    //get all the suggestions shown once we start searching
    let elementsonsearch=await page.locator("//div[@role='option']")

    //count how many elements preent in dom
   let countofelements= await elementsonsearch.count();
   console.log(countofelements)

   //use alltextcontents to capture each value
   const values=await elementsonsearch.allTextContents();

   //use for each to print the values
   //first is v1 which will hold each value
   //second is index number it captures during run
   //third is array on which to run and manipulate
   values.forEach(function(v1,i1,a1){
    console.log(v1);

    if(v1.includes("api")){

        //nth method to click on the element
        //here we pass index like array
        elementsonsearch.nth(i1).click();
    }
   })

   //to search for partial strings we can pass like this.
   await expect(page).toHaveTitle(/.*api/)

})