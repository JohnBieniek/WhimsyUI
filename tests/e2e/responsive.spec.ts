import { expect, test } from "@playwright/test";
import { services } from "../../src/app/content";
import { selectedWork } from "../../src/app/work/portfolio-selection";

const routes = [
  "/", "/about", "/contact", "/services", "/work", "/services/photography",
  ...services.map(service => `/services/${service.slug}`),
  ...Object.values(selectedWork).flat().map(slug => `/work/${slug === "lakeland-website" ? "lakeland-cabaret" : slug}`),
];

for (const width of [320, 768, 1024, 1280, 1440, 1600, 1680, 1920]) {
  test(`active pages keep headings and content inside their columns at ${width}px`, async ({ page }) => {
    test.setTimeout(120_000);
    await page.setViewportSize({ width, height: width === 1440 ? 1050 : 1080 });
    for (const route of routes) {
      const response = await page.goto(route);
      expect(response?.status(), route).toBe(200);
      await page.evaluate(() => document.fonts.ready);
      const issues = await page.evaluate(() => {
        const problems: string[] = [];
        if (document.documentElement.scrollWidth > innerWidth + 1) problems.push("Horizontal page overflow");
        for (const heading of document.querySelectorAll("h1, h2, h3, h4, .kicker")) {
          const bounds = heading.getBoundingClientRect();
          if (!bounds.height) continue;
          const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
          let node: Node | null;
          while ((node = walker.nextNode())) {
            const range = document.createRange();
            range.selectNodeContents(node);
            for (const rect of range.getClientRects()) {
              if (rect.width && (rect.left < bounds.left - 2 || rect.right > bounds.right + 2)) {
                problems.push(`Heading exceeds its column: ${heading.textContent}`);
              }
            }
          }
        }
        return problems;
      });
      expect(issues, `${route} at ${width}px`).toEqual([]);
    }
  });
}

for (const width of [768, 1280, 1440, 1920]) {
  test(`Ad Campaign keeps its short title on one line at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1050 });
    await page.goto("/services/ad-campaign");
    await page.evaluate(() => document.fonts.ready);
    const lines = await page.locator("h1").evaluate(heading => {
      const range = document.createRange();
      range.selectNodeContents(heading);
      return new Set([...range.getClientRects()].filter(rect => rect.width).map(rect => Math.round(rect.top))).size;
    });
    expect(lines).toBe(1);
  });
}

test("tablet Services places its collage below the introduction", async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto("/services");
  await page.evaluate(() => document.fonts.ready);
  const copy = await page.locator(".page-hero > div:first-child").boundingBox();
  const collage = await page.locator(".offset-square-collage-mobile").boundingBox();
  expect(copy).not.toBeNull();
  expect(collage).not.toBeNull();
  expect(collage!.y).toBeGreaterThanOrEqual(copy!.y + copy!.height);
});

test("tablet Home keeps its logo clear of the navigation", async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  const logo = page.getByRole("link", { name: "Whimsy home" });
  await expect(logo).toBeVisible();
  const logoBounds = await logo.boundingBox();
  const navBounds = await page.getByRole("navigation", { name: "Main navigation" }).boundingBox();
  expect(logoBounds!.x + logoBounds!.width).toBeLessThanOrEqual(navBounds!.x);
  await expect(page.locator(".home-copy .home-logo")).toBeHidden();
});

test("Holiday closing panel contains its image and readable heading on tablets", async ({ page }) => {
  await page.setViewportSize({ width: 1024, height: 768 });
  await page.goto("/work/holiday-in-the-halls");
  await page.evaluate(() => document.fonts.ready);
  const panel = await page.locator(".holiday-thanks").boundingBox();
  const image = await page.locator(".holiday-thanks figure").boundingBox();
  expect(panel).not.toBeNull();
  expect(image).not.toBeNull();
  expect(image!.x).toBeGreaterThanOrEqual(panel!.x);
  expect(image!.x + image!.width).toBeLessThanOrEqual(panel!.x + panel!.width + 1);
  const fontSize = await page.locator(".holiday-thanks h2").evaluate(el => parseFloat(getComputedStyle(el).fontSize));
  expect(fontSize).toBeGreaterThanOrEqual(22);
});
