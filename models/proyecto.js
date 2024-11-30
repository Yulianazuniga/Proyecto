const conn = require("../config/bd");
class Proyecto {
  async listarTodos() {
    let [rows] = await conn.query("SELECT*FROM proyecto");
    return rows;
  }

  async guardarProyecto(proyecto) {
    let { nombre_Proyecto,descripcion } = proyecto;
    console.log(proyecto);
    let [rest] = await conn.query(
      "insert into proyecto(nombre_Proyecto,descripcion) values (?,?,?)",
      [nombre_Proyecto,descripcion]
    );

    return { id_proyecto: rest.insertId, ...proyecto };
  }

  async actualizarproyectos( id_proyecto,proyecto) {
    let { id_proyecto,nombre_Proyecto,descripcion} = proyecto;
    let [actualizar] = await conn.query(
      "UPDATE proyecto SET id_proyecto = ? WHERE id_proyecto = ?",
      [id_proyecto,nombre_Proyecto,descripcion]
    );
    return {id_proyecto:actualizar,...proyecto};
  }
  async eliminarProyecto(proyecto){

    let [eliminar] = await conn.query('DELETE FROM proyecto WHERE id_proyecto = ?',        
    );
    return {id_proyecto:eliminar,...proyecto}

}

}

module.exports = Proyecto;
