import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Home from "./page";

vi.mock("next/image", () => ({
  default: ({ alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // Next.js image behavior is covered by the framework; this test checks page semantics.
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} {...props} />
  ),
}));

describe("Home", () => {
  it("renders the Whimsy site with accessible navigation", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Services & Pricing" })).toBeVisible();
    expect(screen.getByRole("heading", { name: /campaigns built/i })).toBeVisible();
    expect(screen.getByRole("heading", { name: /tell us what/i })).toBeVisible();
  });
});
