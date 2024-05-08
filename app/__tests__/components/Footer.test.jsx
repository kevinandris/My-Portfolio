import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Footer from "../../(home)/components/Footer";

test("Renders border at the top", () => {
  render(<Footer />);
  const borderElement = screen.getByTestId("footer-border");
  expect(borderElement).toBeInTheDocument();
});

// test("Renders Navbar component", () => {
//   render(<Footer />);
//   const navbarElement = screen.getByTestId("footer-navbar");
//   expect(navbarElement).toBeInTheDocument();
// });

// test("Footer has a border at the top", () => {
//   render(<Footer />);
//   const borderElement = screen.getByTestId("footer-border");
//   expect(borderElement).toHaveStyle("border-top: 1px solid black");
// });
