import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Title from "../../(home)/components/Title";

test("renders Title component with provided text", () => {
  const text = "Hello World";
  render(<Title text={text} />);
  const titleElement = screen.getByText(text);
  expect(titleElement).toBeInTheDocument();
});

test("renders Title component with provided className", () => {
  const className = "custom-class";
  render(<Title text="Hello World" className={className} />);
  const titleElement = screen.getByText("Hello World");
  expect(titleElement).toHaveClass(className);
});

test("renders Title component with default styles", () => {
  render(<Title text="Hello World" />);
  const titleElement = screen.getByText("Hello World");
  expect(titleElement).toHaveClass(
    "text-3xl font-bold group-hover:text-yellow-400 transition-all"
  );
});

test("renders Title component without text", () => {
  render(<Title />);
  const titleElement = screen.queryByText("Hello World");
  expect(titleElement).not.toBeInTheDocument();
});
