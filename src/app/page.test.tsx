import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Home from "./page";
import WorkPage from "./work/page";
import ContactPage from "./contact/page";

vi.mock("next/image", () => ({
  default: ({ alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // Next.js image behavior is covered by the framework; this test checks page semantics.
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} {...props} />
  ),
}));

describe("Home", () => {
  it("renders the home page with links to the separate routes", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /learn more/i })[0]).toHaveAttribute("href", "/services/strategy-session");
    expect(screen.getAllByRole("link", { name: /book a consultation/i })[0]).toHaveAttribute("href", "/contact");
  });

  it("renders work and contact as distinct pages", () => {
    const { unmount } = render(<WorkPage />);
    expect(screen.getByRole("heading", { name: /campaigns built/i })).toBeVisible();
    unmount();

    render(<ContactPage />);
    expect(screen.getByRole("heading", { name: /tell us what/i })).toBeVisible();
  });
});
