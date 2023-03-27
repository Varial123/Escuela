import { Schema, model } from "mongoose";
const profesorEsquema = new Schema(
    {
        rfc: {
            type: String,
            required: true,
            trim: true,
        },
        nombre: {
            type: String,
            required: true,
            trim: true,
        },
        paterno: {
            type: String,
            required: true,
            trim: true,
        },
        materno:{
            type: String,
            required: true,
            trim: true,
        },
        fechaNac:{
            type: Date,
            required: true,
            trim: true,
        },
        direccion:{
            type: String,
            required: true,
            trim: true,
        },
        telefono:{
            type: Number,
            required: true,
            unique: true,
            trim: true,
        },
        profecion:{
            type: String,
            required: true,
            trim: true,
        },
        numeroEmp:{
            type: Number,
            required: true,
            trim: true,
        },
        opcion: {
            type: Boolean,
          default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);
//modelo de datos como quiero que se llame la collection
export default model("Profesor", profesorEsquema);