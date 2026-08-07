import { expect, test } from "@playwright/test";

test("loads the starter page", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});
