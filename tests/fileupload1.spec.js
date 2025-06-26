/**
 * 
 */

//when files do not have the input tag for them.
const{test,expect}=require("@playwright/test")

test("upload file which has no input tag", async function({page}){

    //specify path of the file.
    let file1="./tests/fixtures/file.js"
  
    //go to the url where the file upload is present.
    await page.goto("https://the-internet.herokuapp.com/upload")

    //use listeners for uploading files from computer.
    //on is the event we need to listen to.
    //filechooser is the event name, second param is callback function.
    //set files and pass one file or multiple files in form of array.
    page.on("filechooser", async (filechoose)=>{
        await filechoose.setFiles(file1)
        // await filechoose.setFiles([file1, file2])
    })

    //forcefully click on the link even if not clicked.
    await page.locator("#drag-drop-upload").click({force:true})

    //wait for time out requires ms.
    await page.waitForTimeout(10000)

    //pause does not require.
    //pause opens up the inspector and then we need to continue like debugging.
    await page.pause()

})