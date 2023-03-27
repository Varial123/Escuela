"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = require("express");
var _alumnoController = require("../controllers/alumnoController");
var _asignaturaController = require("../controllers/asignaturaController");
var _profesorController = require("../controllers/profesorController");
var _Alumno = _interopRequireDefault(require("../models/Alumno"));
var _Asignatura = _interopRequireDefault(require("../models/Asignatura"));
var _Profesor = _interopRequireDefault(require("../models/Profesor"));
var router = (0, _express.Router)();
router.get("/index", _alumnoController.renderAlumnos);
router.post("/alumnos/agregar", _alumnoController.agregarAlumnos);
router.get("/alumnos/agregar", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var alumno;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Alumno["default"].find().lean();
          case 2:
            alumno = _context.sent;
            res.render("agregarAlumnos", {
              alumno: alumno
            });
          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.get("/update/:id", _alumnoController.renderEditAlumnos);
router.post("/update/:id", _alumnoController.updateAlumnos);
router.get("/delete/:id", _alumnoController.deleteAlumnos);
router.get("/status/:id", _alumnoController.statusAlumnos);

//Asiganturas
router.get("/", _asignaturaController.renderAsignaturas);
router.post("/asignaturas/agregar", _asignaturaController.agregarAsignaturas);
router.get("/asignaturas/agregar", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var asignatura;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Asignatura["default"].find().lean();
          case 2:
            asignatura = _context2.sent;
            res.render("agregarAsignaturas", {
              asignatura: asignatura
            });
          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
router.get("/update1/:id", _asignaturaController.renderEditAsignaturas);
router.post("/update1/:id", _asignaturaController.updateAsignaturas);
router.get("/delete1/:id", _asignaturaController.deleteAsignaturas);
router.get("/status1/:id", _asignaturaController.statusAsignaturas);

//Profesor
router.get("/", _profesorController.renderProfesor);
router.post("/profesores/agregar", _profesorController.agregarProfesor);
router.get("/profesores/agregar", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var profesor;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Profesor["default"].find().lean();
          case 2:
            profesor = _context3.sent;
            res.render("agregarProfesores", {
              profesor: profesor
            });
          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
router.get("/update2/:id", _profesorController.renderEditProfesor);
router.post("/update2/:id", _profesorController.updateProfesor);
router.get("/delete2/:id", _profesorController.deleteProfesor);
router.get("/status2/:id", _profesorController.statusProfesor);
var _default = router;
exports["default"] = _default;