import courseReducer from "./courseReducer";
import * as courseActions from "../actions/courseActions";

it("should add course when passed CREATE_COURSE_SUCCESS", () => {
  // Arrange
  const initialState = [
    {
      title: "A"
    },
    {
      title: "B"
    }
  ];
  const newCourse = {
    title: "C"
  };

  const action = courseActions.createCourseSuccess(newCourse);

  // Act
  const newState = courseReducer(initialState, action);

  // Assert
  expect(newState.length).toEqual(3);
  expect(newState[0].title).toEqual("A");
  expect(newState[1].title).toEqual("B");
  expect(newState[2].title).toEqual("C");
});
