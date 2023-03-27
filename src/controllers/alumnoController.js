import Alumno from "../models/Alumno";

export const renderAlumnos = async (req, res) => {
    const alumno = await Alumno.find().lean();
    res.render("index", { alumno: alumno});
};

export const agregarAlumnos = async (req, res) => {
    try {
      const { sexo } = req.body;
      req.body.sexo = sexo;
      const alumno = Alumno(req.body);
      const alumnoAlmacenado = await alumno.save();
      console.log(alumnoAlmacenado);
      res.redirect("/");
    } catch (error) {
      console.log(error);
    } };

export const renderEditAlumnos = async (req, res) => {
    try {
      const alumno = await Alumno.findById(req.params.id).lean();
      res.render("editarAlumnos", { alumno });
    } catch (error) {
      console.log(error.message);
    }};
export const updateAlumnos = async (req, res) => {
    const { id } = req.params;
    await Alumno.findByIdAndUpdate(id, req.body);
  
    res.redirect("/");
  };

export const deleteAlumnos = async (req, res) => {
    const { id } = req.params;
    await Alumno.findByIdAndDelete(id);
  
    res.redirect("/alumnos/agregar");
  };

export const statusAlumnos = async (req, res) => {
    const { id } = req.params;
    const alumno = await Alumno.findById(id);
    alumno.opcion = !alumno.opcion;
    await alumno.save();
    res.redirect("/alumnos/agregar");
  };
