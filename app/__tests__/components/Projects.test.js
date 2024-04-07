import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Projects from "../../(home)/components/Projects";

test("should render correct number of project items", () => {
  render(<Projects />);
  const projectItems = screen.getAllByTestId("project-item");
  expect(projectItems.length).toBe(3);
});

test("should render project titles correctly", () => {
  render(<Projects />);
  const projectTitles = screen.getAllByTestId("project-title");
  expect(projectTitles[0]).toHaveTextContent("Movie Trailer App");
  expect(projectTitles[1]).toHaveTextContent("Book Store App");
  expect(projectTitles[2]).toHaveTextContent("Accommodation App");
});

test("should navigate to the correct link when clicking on a project item", () => {
  render(<Projects />);
  const projectItems = screen.getAllByTestId("project-item");
  fireEvent.click(projectItems[0]);
  expect(window.location.href).toBe("http://localhost:3000");
});

test("should render projects without any technologies", () => {
  const projects = [
    {
      title: "Project Without Technologies",
      tech: [],
      link: "http://localhost:3000",
      cover: "/project.jpg",
      background: "bg-red-300",
    },
  ];
  render(<Projects />);
  const projectTitles = screen.getAllByTestId("project-title");
  expect(projectTitles[0]).toHaveTextContent("Project Without Technologies");
});
