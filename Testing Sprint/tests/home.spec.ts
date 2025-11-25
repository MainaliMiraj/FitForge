import { test, expect } from "@playwright/test";

// test("open homepage and check title", async ({ page }) => {
//   await page.goto("https://www.fifa.com/en/home");
//   await expect(page).toHaveTitle("FIFA | The Home of Football");
// });

test("verify that that fifa logo has a alt text", async ({ page }) => {
  await page.goto("https://www.fifa.com/en/home");

  const logo = page.locator('a[href="/en/home"] img[alt="FIFA"]');
  await expect(logo).toBeVisible();
});

test ("verify if nav is visible or not",async({page})=>{
  await page.goto("https://www.fifa.com/en/home");
  const nav=page.locator('')
})
