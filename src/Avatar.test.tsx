import { describe, expect, it,beforeEach } from "vitest";
import { render, screen,cleanup,fireEvent } from "@testing-library/react";

import Avatar,{FALLBACK_AVATAR_ALT_TEXT,FALLBACK_AVATAR_URL} from "./Avatar";

describe("Avatar", () => {
  beforeEach(()=>{
    cleanup()
  })
  it("should render an <img/> with alt text", () => {
    const url = "https://avatars.githubusercontent.com/u/13873668?v=4";
    const alt = "@github-handle";
    render(<Avatar url={url} alt={alt} />);
		const img = screen.getByAltText(alt)
    expect(img).toBeInTheDocument();
		expect(img.tagName).toBe("IMG");
  });


it("should render the url and alt passed in", () => {
    const url = "https://avatars.githubusercontent.com/u/13873668?v=4";
    const alt = "a beautiful cat";
    render(<Avatar url={url} alt={alt} />);

    const img = screen.getByAltText(alt);
    expect(img).toHaveAttribute("src", url);
});

it("Should use fallback image if no url passed in",()=>{
  render(<Avatar/>);
  const img = screen.getByAltText(FALLBACK_AVATAR_ALT_TEXT);
    expect(img).toHaveAttribute("src", FALLBACK_AVATAR_URL);
});

it("should user fallback image if image fails to load",()=>{
  render(<Avatar url="https://avatars.githubusercontent.com/u/fake.png"/>)
  const img = screen.getByAltText(FALLBACK_AVATAR_ALT_TEXT);
  fireEvent.error(img)
  expect(img).toHaveAttribute("src", FALLBACK_AVATAR_URL);
})
it("should user fallback image if image provied as empty string",()=>{
  render(<Avatar url=""/>)
  const img = screen.getByAltText(FALLBACK_AVATAR_ALT_TEXT);
  fireEvent.error(img)
  expect(img).toHaveAttribute("src", FALLBACK_AVATAR_URL);
})
});