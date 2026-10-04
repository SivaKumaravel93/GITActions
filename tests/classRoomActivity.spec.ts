import {test} from "@playwright/test"

test("Login Salesforce Application", async({page}) =>
{
    await page.goto("https://login.salesforce.com/?locale=in");
    await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com");
    await page.locator('#Login').click();
    await page.locator('#password').fill("TestLeaf@2025");
    await page.locator('#Login').click();
    await page.waitForTimeout(5000);
    if("Lightning Experience" === await page.title()){
        console.log("Login Successful");
        
    }
}
)