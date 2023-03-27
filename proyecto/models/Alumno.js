"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var alumnoEsquema = new _mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  paterno: {
    type: String,
    required: true,
    trim: true
  },
  materno: {
    type: String,
    required: true,
    trim: true
  },
  fechaNac: {
    type: Date,
    required: true,
    trim: true
  },
  sexo: {
    type: String,
    required: true,
    trim: true
  },
  telefono: {
    type: Number,
    required: true,
    unique: true,
    trim: true
  },
  direccion: {
    type: String,
    required: true,
    trim: true
  },
  opcion: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true,
  versionKey: false
});
//modelo de datos como quiero que se llame la collection
var _default = (0, _mongoose.model)("Alumno", alumnoEsquema);
exports["default"] = _default;