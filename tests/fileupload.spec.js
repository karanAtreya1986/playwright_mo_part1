/**
 * 
 */

//when files have the input tag for them.
const{test,expect}=require("@playwright/test")

test("upload file which has input tag", async function({page}){

    //if we have multiple files, we can specify the path first.
    let file1="./tests/fixtures/file.js"
    let file2="./tests/fixtures/file.js"

    //go to the url where the file upload is present.
    await page.goto("C:/Users/karan/Desktop/playwrightbymukesh/fileupload.html")

    //to add one file use this.
    //setinputfiles has to be passed file.
    // await page.locator("//*[@id='myFile']").setInputFiles(file1)

    //send multiple files
    //send in array form
    await page.locator("//*[@id='myFile']").setInputFiles(file1, file2)

    //pause run for some time.
    await page.pause()

})