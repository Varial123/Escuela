import Profesor from "../models/Profesor";

export const renderProfesor = async (req, res) => {
    const profesor = await Profesor.find().lean();
    res.render("index", { profesor: profesor});
};

export const agregarProfesor = async (req, res) => {
    try {
      const profesor = Profesor(req.body);
      const profesorAlmacenado = await profesor.save();
      console.log(profesorAlmacenado);
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  };

export const renderEditProfesor = async (req, res) => {
    try {
      const profesor = await Profesor.findById(req.params.id).lean();
      res.render("editarProfesores", { profesor });
    } catch (error) {
      console.log(error.message);
    }
  };

export const updateProfesor = async (req, res) => {
    const { id } = req.params;
    await Profesor.findByIdAndUpdate(id, req.body);
    res.redirect("/");
  };

export const deleteProfesor = async (req, res) => {
    const { id } = req.params;
    await Profesor.findByIdAndDelete(id);
  
    res.redirect("/profesores/agregar");
  };

export const statusProfesor = async (req, res) => {
    const { id } = req.params;
    const profesor = await Profesor.findById(id);
    profesor.opcion = !profesor.opcion;
    await profesor.save();
    res.redirect("/profesores/agregar");
  };
