import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Navbar from "../../(home)/components/Navbar";

test("Renders Navbar component with correct title", () => {
  render(<Navbar />);
  const titleElement = screen.getByText("Kevin Pudihang 🧑🏻");
  expect(titleElement).toBeInTheDocument();
});

test("Renders Navbar component with correct number of social links", () => {
  render(<Navbar />);
  const socialLinks = screen.getAllByRole("link");
  expect(socialLinks.length).toBe(2);
});

test("Renders Navbar component with custom class name", () => {
  render(<Navbar className="custom-class" />);
  const navbarElement = screen.getByTestId("navbar");
  expect(navbarElement).toHaveClass("custom-class");
});

test("Triggers hover effect on social icons", async () => {
  render(<Navbar />);
  const socialIcons = screen.getAllByRole("link");
  socialIcons.forEach((icon) => {
    fireEvent.mouseEnter(icon);
    expect(icon).toHaveClass("hover:scale-125");
  });
});
