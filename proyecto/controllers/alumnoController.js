"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAlumnos = exports.statusAlumnos = exports.renderEditAlumnos = exports.renderAlumnos = exports.deleteAlumnos = exports.agregarAlumnos = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _Alumno = _interopRequireDefault(require("../models/Alumno"));
var renderAlumnos = /*#__PURE__*/function () {
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
            res.render("index", {
              alumno: alumno
            });
          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function renderAlumnos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.renderAlumnos = renderAlumnos;
var agregarAlumnos = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var sexo, alumno, alumnoAlmacenado;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            sexo = req.body.sexo;
            req.body.sexo = sexo;
            alumno = (0, _Alumno["default"])(req.body);
            _context2.next = 6;
            return alumno.save();
          case 6:
            alumnoAlmacenado = _context2.sent;
            console.log(alumnoAlmacenado);
            res.redirect("/");
            _context2.next = 14;
            break;
          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));
  return function agregarAlumnos(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.agregarAlumnos = agregarAlumnos;
var renderEditAlumnos = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var alumno;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Alumno["default"].findById(req.params.id).lean();
          case 3:
            alumno = _context3.sent;
            res.render("editarAlumnos", {
              alumno: alumno
            });
            _context3.next = 10;
            break;
          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0.message);
          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function renderEditAlumnos(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.renderEditAlumnos = renderEditAlumnos;
var updateAlumnos = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return _Alumno["default"].findByIdAndUpdate(id, req.body);
          case 3:
            res.redirect("/");
          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return function updateAlumnos(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.updateAlumnos = updateAlumnos;
var deleteAlumnos = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.next = 3;
            return _Alumno["default"].findByIdAndDelete(id);
          case 3:
            res.redirect("/alumnos/agregar");
          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return function deleteAlumnos(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.deleteAlumnos = deleteAlumnos;
var statusAlumnos = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, alumno;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _context6.next = 3;
            return _Alumno["default"].findById(id);
          case 3:
            alumno = _context6.sent;
            alumno.opcion = !alumno.opcion;
            _context6.next = 7;
            return alumno.save();
          case 7:
            res.redirect("/alumnos/agregar");
          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return function statusAlumnos(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.statusAlumnos = statusAlumnos;