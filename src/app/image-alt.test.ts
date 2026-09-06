import { describe, expect, it } from "vitest";
import { services } from "./content";
import { getImageAlt } from "./image-alt";
import { caseStudies } from "./work-data";

describe("image descriptions", () => {
  it("covers every service hero and portfolio image", () => {
    const sources = new Set([
      ...services.map((service) => service.image),
      ...caseStudies.flatMap((study) => [study.file, ...study.images].map((file) => `/work/${file}`)),
    ]);
    for (const src of sources) {
      expect(getImageAlt(src).trim(), src).not.toBe("");
    }
  });

  it("describes the same asset consistently when its URL contains encoded spaces", () => {
    expect(getImageAlt("/work/lakeland%20cabaret/site.png")).toBe(getImageAlt("/work/lakeland cabaret/site.png"));
  });

  it("requires an explicit description for new assets instead of silently hiding them", () => {
    expect(() => getImageAlt("/new-campaign.png")).toThrow("Add an image description");
  });
});
