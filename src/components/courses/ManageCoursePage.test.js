import React from "react";
import { mount } from "enzyme";
import { newCourse, courses, authors } from "../../../tools/mockData";
import { ManageCoursePage } from "./ManageCoursePage";

function renderManageCoursePage(args) {
  const defaultProps = {
    authors,
    courses,
    course: newCourse,
    history: {},
    saveCourse: jest.fn(),
    loadCourses: jest.fn(),
    loadAuthors: jest.fn(),
    match: {}
  };

  const props = { ...defaultProps, ...args };

  return mount(<ManageCoursePage {...props} />);
}

it("sets error when attempting to save an empty title field", () => {
  const wrapper = renderManageCoursePage();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).toBe("Title is required");
});
