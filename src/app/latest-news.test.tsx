import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { LatestNews, type NewsArticle } from "./latest-news";

vi.mock("next/image", () => ({
  // Browser coverage checks real image decoding and the visual transition.
  default: ({ fill, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean }) => {
    void fill;
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />;
  },
}));
vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {});

const photos: NewsArticle["media"] = [1, 2, 3].map(number => ({ kind: "image", src: `/photo-${number}.jpg`, alt: `Photo ${number}` })) as NewsArticle["media"];
const article: NewsArticle = { id: "new", date: "2026-10-08", dateLabel: "October 8, 2026", body: <p>New article</p>, media: photos };
const older: NewsArticle = { ...article, id: "older", date: "2026-10-07", dateLabel: "October 7, 2026", body: <p>Older article</p> };
const finishSlide = () => document.querySelectorAll('[aria-label="Article photos and video"] [aria-hidden="false"]').forEach(element => { fireEvent.animationEnd(element); fireEvent(element, new Event("webkitAnimationEnd", { bubbles: true })); });
const tick = (milliseconds: number) => { act(() => vi.advanceTimersByTime(milliseconds)); finishSlide(); };
const renderNews = (element: React.ReactElement) => { const result = render(element); result.container.querySelectorAll("img").forEach(image => fireEvent.load(image)); return result; };

afterEach(() => { cleanup(); vi.useRealTimers(); });

describe("Latest news", () => {
  it("keeps the outgoing image visible until the incoming image loads and finishes sliding", () => {
    render(<LatestNews items={[article]} />);
    fireEvent.click(screen.getByRole("button", { name: "Next image or video" }));
    expect(screen.getByAltText("Photo 1")).toBeVisible();
    expect(screen.getByRole("button", { name: "Next image or video" })).toBeDisabled();
    fireEvent.load(screen.getByAltText("Photo 2"));
    expect(screen.getByAltText("Photo 1")).toBeVisible();
    finishSlide();
    expect(screen.getByAltText("Photo 1")).not.toBeVisible();
    expect(screen.getByAltText("Photo 2")).toBeVisible();
    expect(screen.getByRole("button", { name: "Next image or video" })).toBeEnabled();
  });
  it("rotates the first image after five seconds, then every eight seconds and wraps", () => {
    vi.useFakeTimers();
    renderNews(<LatestNews items={[article]} />);
    tick(4999);
    expect(screen.getByAltText("Photo 1")).toBeVisible();
    tick(1);
    expect(screen.getByAltText("Photo 2")).toBeVisible();
    tick(7999);
    expect(screen.getByAltText("Photo 2")).toBeVisible();
    tick(1);
    expect(screen.getByAltText("Photo 3")).toBeVisible();
    tick(8000);
    expect(screen.getByAltText("Photo 1")).toBeVisible();
  });

  it("waits for a muted autoplay video to end before advancing and gives photos eight seconds", () => {
    vi.useFakeTimers();
    renderNews(<LatestNews />);
    const video = screen.getByLabelText("Speaking at Wake Up Jackson") as HTMLVideoElement;
    expect(video.autoplay).toBe(true);
    expect(video.muted).toBe(true);
    expect(video.controls).toBe(true);
    tick(60000);
    expect(video).toBeInTheDocument();
    fireEvent.ended(video);
    expect(screen.getByAltText(/photo 1/)).toBeVisible();
    tick(7999);
    expect(screen.getByAltText(/photo 1/)).toBeVisible();
    tick(1);
    expect(screen.getByAltText(/photo 2/)).toBeVisible();
    expect(screen.queryByRole("navigation", { name: "Latest articles" })).not.toBeInTheDocument();
  });

  it.each(["Previous", "Next"])("stops rotation after the %s media arrow, even across article navigation", direction => {
    vi.useFakeTimers();
    renderNews(<LatestNews items={[article, older]} />);
    fireEvent.click(screen.getByRole("button", { name: `${direction} image or video` }));
    tick(60000);
    expect(screen.getByAltText(direction === "Previous" ? "Photo 3" : "Photo 2")).toBeVisible();
    fireEvent.click(screen.getByRole("button", { name: "Previous article" }));
    tick(60000);
    expect(screen.getByAltText("Photo 1")).toBeVisible();
  });

  it("navigates right to older articles and left to newer articles with correct boundaries", () => {
    renderNews(<LatestNews items={[article, older]} />);
    expect(screen.getByRole("button", { name: "More recent article" })).toBeDisabled();
    fireEvent.click(screen.getByRole("button", { name: "Previous article" }));
    expect(screen.getByText("Older article")).toBeVisible();
    expect(screen.getByLabelText("October 7, 2026")).toHaveAttribute("datetime", "2026-10-07");
    expect(screen.getByRole("button", { name: "Previous article" })).toBeDisabled();
    fireEvent.click(screen.getByRole("button", { name: "More recent article" }));
    expect(screen.getByText("New article")).toBeVisible();
  });

  it("does not advance a manually selected video when it ends", () => {
    renderNews(<LatestNews />);
    fireEvent.click(screen.getByRole("button", { name: "Next image or video" }));
    finishSlide();
    fireEvent.click(screen.getByRole("button", { name: "Previous image or video" }));
    const video = screen.getByLabelText("Speaking at Wake Up Jackson");
    fireEvent.ended(video);
    expect(video).toBeInTheDocument();
  });
});
