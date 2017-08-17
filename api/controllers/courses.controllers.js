'use strict';
var courseData = require('../data/course-data.json');

module.exports.coursesGetAll = function(req, res) {

  console.log('GET the courses');
  res
    .status(200)
    .json(courseData);
};

module.exports.coursesGetOne = function(req, res) {
  console.log('GET courseId', req.params.courseId);
  res
    .status(200)
    .json(courseData[req.params.courseId]);
};

module.exports.coursesAddOne = function(req, res) {
  console.log("POST new course");
  console.log(req.body);
  res
    .status(200)
    .json(req.body);
};