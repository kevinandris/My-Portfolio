import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Skills from "../../(home)/components/Skills";

test("Renders correct number of skills", () => {
  render(<Skills />);
  const skillElements = screen.getAllByTestId("skill");
  expect(skillElements.length).toBe(1);
});

// test("Renders skills with correct text", () => {
//   render(<Skills />);
//   const skillElements = screen.getAllByTestId("skill");
//   const expectedSkills = [
//     "NextJS",
//     "Typescript",
//     "Tailwindcss",
//     "Javascript",
//     "HTML",
//     "CSS",
//     "ReactJS",
//     "MongoDB",
//     "ExpressJS",
//     "NodeJs",
//     "Sass",
//     "MaterialUI",
//     "Git",
//     "GitHub",
//     "MySQL",
//   ];
//   skillElements.forEach((element, index) => {
//     expect(element.textContent).toBe(expectedSkills[index]);
//   });
// });

test("Renders the Skills component with a custom title", () => {
  render(<Skills />);
  const titleElement = screen.getByText("Expertise ⚡");
  expect(titleElement).toBeInTheDocument();
});

test("Renders the Skills component with an empty list", () => {
  render(<Skills />);
  const skillElements = screen.queryAllByTestId("skill");
  expect(skillElements.length).toBe(1);
});

test("Renders unique skills", () => {
  render(<Skills />);
  const skillElements = screen.getAllByTestId("skill");
  const skills = skillElements.map((element) => element.textContent);
  const uniqueSkills = [...new Set(skills)];
  expect(uniqueSkills.length).toBe(skillElements.length);
});
