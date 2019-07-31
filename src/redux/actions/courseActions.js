import * as types from "./actionTypes";
import * as courseAPI from "../../api/courseApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function loadCourses() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return courseAPI
      .getCourses()
      .then(courses => {
        dispatch({ type: types.LOAD_COURSES_SUCCESS, courses });
      })
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}

export function saveCourse(course) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return courseAPI
      .saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch({ type: types.UPDATE_COURSE_SUCCESS, course: savedCourse })
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}

export function deleteCourse(course) {
  return function(dispatch) {
    dispatch({ type: types.DELETE_COURSE_OPTIMISTIC, course });
    return courseAPI.deleteCourse(course.id);
  };
}
