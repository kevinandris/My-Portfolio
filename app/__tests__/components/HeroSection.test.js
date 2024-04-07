import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import HeroSection from "../../(home)/components/HeroSection";


test("renderHeroSectionWithoutCrashing", () => {
  render(<HeroSection />);
});

test("Displays correct title", () => {
  render(<HeroSection />);
  const titleElement = screen.getByText("Hi there,");
  expect(titleElement).toBeInTheDocument();
});

test("Displays correct description", () => {
  render(<HeroSection />);
  const descriptionElement = screen.getByText(
    "Fresh Software Engineer from Auckland University of Technology, passionate to be a Fullstack Developer."
  );
  expect(descriptionElement).toBeInTheDocument();
});

test("displayCorrectEmailLink", () => {
  render(<HeroSection />);
  const emailLink = screen.getByText("Email Me 📩");
  expect(emailLink).toHaveAttribute("href", "mailto:kevinandris27@gmail.com");
});
