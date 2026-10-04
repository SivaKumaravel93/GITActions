import {test} from "@playwright/test"

test("Login CRM Application", async({page}) =>
{
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator('//input[@id="username"]').fill("democsr2");
    await page.locator('//input[@id="password"]').fill("crmsfa");
    await page.locator('//input[@class="decorativeSubmit"]').click();
    await page.locator('//a[contains(text(),"CRM")]').click();
}
)