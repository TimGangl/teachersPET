/* eslint-disable camelcase */
var db = require("../models"),
  bcrypt = require('bcryptjs'),
  jwt = require('jsonwebtoken');

module.exports = function (app) {
  //================ User Routes ===============

  // //Get user by id
  // app.get("/api/user/:id", function(req, res) {
  //   db.User.findAll({ where: { id: req.params.id } }).then(function(
  //     project2_db
  //   ) {
  //     res.json(project2_db);
  //   });
  // });

  // Create a new user
  app.post("/api/users", function (req, res) {
    db.User.create(req.body).then(function (project2_db) {
      res.json(project2_db);
    });
  });

  //================ Classes Routes ===============

  // Get all classes
  app.get("/api/classes", function(req, res) {
    db.Class.findAll({}).then(function(project2_db) {
      res.json(project2_db);
    });
  });

  // Get one class
  app.get("/api/classes/:id", function (req, res) {
    db.Class.findAll({ where: { id: req.params.id } }).then(function (
      project2_db
    ) {
      res.json(project2_db);
    });
  });

  // Create a new class
  app.post("/api/classes", function (req, res) {
    db.Class.create(req.body).then(function (project2_db) {
      res.json(project2_db);
    });
  });

  // Delete a class by id
  app.delete("/api/classes/:id", function (req, res) {
    db.Class.destroy({ where: { id: req.params.id } }).then(function (
      project2_db
    ) {
      res.json(project2_db);
    });
  });

  //============= Assignments Routes ==============

  // Get all assignments in a class
  app.get("/api/assignments/classes/:id", function (req, res) {
    db.Assignment.findAll({ where: { ClassId: req.params.id } }).then(function (
      project2_db
    ) {
      res.json(project2_db);
    });
  });

  // Create a new assignment
  app.post("/api/assignments", function (req, res) {
    db.Assignment.create(req.body).then(function (project2_db) {
      res.json(project2_db);
    });
  });

  // Delete an assignment by id
  app.delete("/api/students/:id", function (req, res) {
    db.Assignment.destroy({ where: { id: req.params.id } }).then(function (
      project2_db
    ) {
      res.json(project2_db);
    });
  });

  //================ Students Routes ===============

  // Get all students
  app.get("/api/students", function (req, res) {
    db.Student.findAll({}).then(function (project2_db) {
      res.json(project2_db);
    });
  });

  // Get one student
  app.get("/api/students/:id", function (req, res) {
    db.Student.findAll({ where: { id: req.params.id } }).then(function (
      project2_db
    ) {
      res.json(project2_db);
    });
  });

  // Create a new student
  app.post("/api/students", function (req, res) {
    db.Student.create(req.body).then(function (project2_db) {
      res.json(project2_db);
    });
  });

  // Delete a student by id
  app.delete("/api/students/:id", function (req, res) {
    db.Student.destroy({ where: { id: req.params.id } }).then(function (
      project2_db
    ) {
      res.json(project2_db);
    });
  });

  //================ Lesson Plan Routes ===============

  // Get all Lesson Plans
  app.get("/api/lessonplans", function (req, res) {
    db.Lessonplan.findAll({}).then(function (project2_db) {
      res.json(project2_db);
    });
  });

  // Get one Lesson Plan
  app.get("/api/lessonplans/:id", function (req, res) {
    db.Lessonplan.findAll({ where: { id: req.params.id } }).then(function (
      project2_db
    ) {
      res.json(project2_db);
    });
  });

  // Create a new Lesson Plan
  app.post("/api/lessonplans", function (req, res) {
    db.Lessonplan.create(req.body).then(function (project2_db) {
      res.json(project2_db);
    });
  });

  // Delete a Lesson Plan by id
  app.delete("/api/lessonplans/:id", function (req, res) {
    db.Lessonplan.destroy({ where: { id: req.params.id } }).then(function (
      project2_db
    ) {
      res.json(project2_db);
    });
  });

  //============= Student Notes Routes ==============

  // Get all students notes in a class
  app.get("/api/students/notes/:id", function (req, res) {
    db.Studentnote.findAll({ where: { ClassId: req.params.id } }).then(function (
      project2_db
    ) {
      res.json(project2_db);
    });
  });

  // Create a new student notes
  app.post("/api/students/notes", function (req, res) {
    db.Studentnote.create(req.body).then(function (project2_db) {
      res.json(project2_db);
    });
  });

  // Delete an assignment by id
  app.delete("/api/students/notes/:id", function (req, res) {
    db.Studentnote.destroy({ where: { id: req.params.id } }).then(function (
      project2_db
    ) {
      res.json(project2_db);
    });
  });

  //================ Student Assignment Routes ===============

  // Get all Students Assignment
  app.get("/api/students/assignments", function (req, res) {
    db.Studentassignment.findAll({}).then(function (project2_db) {
      res.json(project2_db);
    });
  });

  // Get one Student Assignment
  app.get("/api/students/assignments/:id", function (req, res) {
    db.Studentassignment.findAll({ where: { id: req.params.id } }).then(function (
      project2_db
    ) {
      res.json(project2_db);
    });
  });

  // Create a new Student Assignment
  app.post("/api/students/assignments", function (req, res) {
    db.Studentassignment.create(req.body).then(function (project2_db) {
      res.json(project2_db);
    });
  });

  // Delete a Student assignment by id
  app.delete("/api/students/assignments/:id", function (req, res) {
    db.Studentassignment.destroy({ where: { id: req.params.id } }).then(function (
      project2_db
    ) {
      res.json(project2_db);
    });
  });




  app.get('/api/user', function (req, res) {
    console.log(req.user);
    res.json(req.user);
  });

  app.post('/api/user/signup', async function (req, res) {
    req.body.email = req.body.email.toLowerCase();
    //has the password
    const password = await bcrypt.hash(req.body.password, 10);
    //create user in database
    const user = await db.User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: password,
    });

    //create cookie for user 
    const token = jwt.sign({ id: user.id }, process.env.APP_SECRET);
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
    });
    console.log("\n\n\n\n\n\n\n\n\n", user);
    res.json(user);
  })
  app.post('/api/user/login', async function (req, res) {
    const user = await db.User.findOne({ where: { email: req.body.email } });
    if (!user) {
      return res.json({message: 'No User found.'});
      
    }
    const valid = await bcrypt.compare(req.body.password, user.password);
    if (!valid) {
      return res.json({message: 'Incorrect password!'});
      
    }
    const token = jwt.sign({ id: user.id }, process.env.APP_SECRET);
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });

    res.json(user);
  });
};
