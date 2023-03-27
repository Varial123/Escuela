import { Router } from "express";
import { agregarAlumnos, deleteAlumnos, renderAlumnos, renderEditAlumnos, statusAlumnos, updateAlumnos } from "../controllers/alumnoController";
import { renderAsignaturas, agregarAsignaturas, deleteAsignaturas, renderEditAsignaturas, updateAsignaturas, statusAsignaturas } from "../controllers/asignaturaController";
import { agregarProfesor, deleteProfesor, renderEditProfesor, renderProfesor, statusProfesor, updateProfesor } from "../controllers/profesorController";
import Alumno from "../models/Alumno";
import Asignatura from "../models/Asignatura";
import Profesor from "../models/Profesor";

const router = Router();

router.get("/index", renderAlumnos);

router.post("/alumnos/agregar", agregarAlumnos);

router.get("/alumnos/agregar", async (req, res) => {
  const alumno = await Alumno.find().lean();
  res.render("agregarAlumnos", { alumno: alumno });
});

router.get("/update/:id", renderEditAlumnos);

router.post("/update/:id", updateAlumnos);

router.get("/delete/:id", deleteAlumnos);

router.get("/status/:id", statusAlumnos);

//Asiganturas
router.get("/", renderAsignaturas);

router.post("/asignaturas/agregar", agregarAsignaturas);

router.get("/asignaturas/agregar", async (req, res) => {
  const asignatura = await Asignatura.find().lean();
  res.render("agregarAsignaturas", { asignatura: asignatura });
});

router.get("/update1/:id", renderEditAsignaturas);

router.post("/update1/:id", updateAsignaturas);

router.get("/delete1/:id", deleteAsignaturas);

router.get("/status1/:id", statusAsignaturas);



//Profesor
router.get("/", renderProfesor);

router.post("/profesores/agregar", agregarProfesor);

router.get("/profesores/agregar", async (req, res) => {
  const profesor = await Profesor.find().lean();
  res.render("agregarProfesores", { profesor: profesor });
});

router.get("/update2/:id", renderEditProfesor);

router.post("/update2/:id", updateProfesor);

router.get("/delete2/:id",deleteProfesor );

router.get("/status2/:id", statusProfesor);



export default router;
