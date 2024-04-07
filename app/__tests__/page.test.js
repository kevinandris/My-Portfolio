import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Page from "../(home)/page";

test("Renders the page with Navbar component", () => {
  render(<Page />);
  const navbarElement = screen.getByTestId("navbar");
  expect(navbarElement).toBeInTheDocument();
});

test("Renders the page with HeroSection component", () => {
  render(<Page />);
  const heroSectionElement = screen.getByTestId("hero-section");
  expect(heroSectionElement).toBeInTheDocument();
});

test("Renders the page with Skills component", () => {
  render(<Page />);
  const skillsElement = screen.getByTestId("skills");
  expect(skillsElement).toBeInTheDocument();
});

test("Renders the page with Projects component", () => {
  render(<Page />);
  const projectsElement = screen.getByTestId("projects");
  expect(projectsElement).toBeInTheDocument();
});
