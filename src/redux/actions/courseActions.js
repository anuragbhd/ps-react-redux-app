import * as types from "./actionTypes";
import * as courseAPI from "../../api/courseApi";

export function loadCourses() {
  return function(dispatch) {
    return courseAPI
      .getCourses()
      .then(courses => {
        dispatch({ type: types.LOAD_COURSES_SUCCESS, courses });
      })
      .catch(error => {
        throw error;
      });
  };
}

export function saveCourse(course) {
  return function(dispatch) {
    return courseAPI
      .saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch({ type: types.UPDATE_COURSE_SUCCESS, course: savedCourse })
          : dispatch({
              type: types.CREATE_COURSE_SUCCESS,
              course: savedCourse
            });
      })
      .catch(error => {
        throw error;
      });
  };
}
