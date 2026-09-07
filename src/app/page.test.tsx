import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Home from "./page";
import WorkPage from "./work/page";
import ContactPage from "./contact/page";
import ServicesPage from "./services/page";

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
    expect(screen.getAllByRole("link", { name: /book a consultation/i })[0]).toHaveAttribute("href", "/contact");
  });

  it("links the consulting card to its renamed page", () => {
    render(<ServicesPage />);
    const card = screen.getByRole("heading", { name: /buisness consulting session/i }).closest("article");
    expect(card).not.toBeNull();
    expect(within(card!).getByRole("link", { name: /learn more/i })).toHaveAttribute("href", "/services/business-consulting-session");
  });

  it("renders work and contact as distinct pages", () => {
    const { unmount } = render(<WorkPage />);
    expect(screen.getByRole("heading", { name: /campaigns built/i })).toBeVisible();
    unmount();

    render(<ContactPage />);
    expect(screen.getByRole("heading", { name: /tell us what/i })).toBeVisible();
  });
});
