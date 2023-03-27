import Asignatura from "../models/Asignatura";

export const renderAsignaturas = async (req, res) => {
    const asignatura = await Asignatura.find().lean();
    res.render("index", { asignatura: asignatura});
};

export const agregarAsignaturas = async (req, res) => {
    const asignatura = Asignatura(req.body);
    const asignaturaAlmacenada = await asignatura.save();
    console.log(asignaturaAlmacenada);
    res.redirect("/");
  };

export const renderEditAsignaturas = async (req, res) => {
    try {
      const asignatura = await Asignatura.findById(req.params.id).lean();
      res.render("Editar", { asignatura });
    } catch (error) {
      console.log(error.message);
    }
  };

export const updateAsignaturas = async (req, res) => {
  const { id } = req.params;
  await Asignatura.findByIdAndUpdate(id, req.body);

  res.redirect("/");
};

export const deleteAsignaturas = async (req, res) => {
    const { id } = req.params;
    await Asignatura.findByIdAndDelete(id);
    res.redirect("/asignaturas/agregar");
  };

export const statusAsignaturas = async (req, res) => {
    const { id } = req.params;
    const asignatura = await Asignatura.findById(id);
    asignatura.opcion = !asignatura.opcion;
    await asignatura.save();
    res.redirect("/asignaturas/agregar");
  };
