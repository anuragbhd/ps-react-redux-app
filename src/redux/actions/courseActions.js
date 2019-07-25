import * as types from "./actionTypes";
import * as courseAPI from "../../api/courseApi";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export function loadCourses() {
  return function(dispatch) {
    courseAPI
      .getCourses()
      .then(courses => {
        dispatch({ type: types.LOAD_COURSES_SUCCESS, courses });
      })
      .catch(error => {
        throw error;
      });
  };
}
