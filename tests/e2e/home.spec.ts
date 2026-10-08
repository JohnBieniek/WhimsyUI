import { expect, test } from "@playwright/test";

test("loads the starter page", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("latest news plays muted video, supports sound, and keeps manual media selection", async ({ page }) => {
  await page.goto("/");
  const news = page.getByRole("region", { name: "The Latest from Whimsy" });
  await news.scrollIntoViewIfNeeded();
  const video = news.locator("video");
  await expect.poll(() => video.evaluate((element: HTMLVideoElement) => element.currentTime)).toBeGreaterThan(0);
  await expect(video).toHaveJSProperty("muted", true);
  await expect(video).toHaveJSProperty("controls", true);
  await video.evaluate((element: HTMLVideoElement) => { element.muted = false; });
  await expect(video).toHaveJSProperty("muted", false);
  await video.evaluate((element: HTMLVideoElement) => { element.currentTime = element.duration - 0.3; });
  await expect(news.getByAltText(/photo 1/)).toBeVisible({ timeout: 10000 });
  await page.clock.install();
  await news.getByRole("button", { name: "Next image or video" }).click();
  await page.clock.fastForward(30000);
  await expect(news.getByAltText(/photo 2/)).toBeVisible();
  await page.reload();
  await expect(news.locator("video")).toBeVisible();
});

for (const width of [390, 768, 1440]) {
  test(`latest news layout fits at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/");
    const news = page.getByRole("region", { name: "The Latest from Whimsy" });
    await news.scrollIntoViewIfNeeded();
    const heading = await news.getByRole("heading").boundingBox();
    const date = await news.locator("time").boundingBox();
    const video = await news.locator("video").boundingBox();
    const copy = await news.getByText(/Had a great morning/).boundingBox();
    const section = await news.boundingBox();
    expect(heading!.x).toBeLessThan(date!.x);
    expect(date!.x + date!.width).toBeCloseTo(section!.x + section!.width, 0);
    if (width > 760) expect(video!.x + video!.width).toBeLessThan(copy!.x);
    else expect(video!.y + video!.height).toBeLessThan(copy!.y);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
  });
}
