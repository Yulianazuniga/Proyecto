const conn = require("../config/bd");
class Pruebas {
  async listarPrueba() {
    let [rows] = await conn.query("SELECT*FROM prueba");
    return rows;
  }

  async pruebaProyecto(prueba) {
    let { id_prueba,fechainicio,fechafin,numero_Pruebas} = prueba;
    console.log(prueba);
    let [rest] = await conn.query(
      "insert into proyecto(id_prueba,descripcion) values (?,?,?,?)",
      [id_prueba,fechainicio,fechafin,numero_Pruebas]
    );

    return { id_prueba: rest.insertId, ...prueba };
  }

  async actualizarPrueba( id_prueba,prueba) {
    let {  id_prueba,fechainicio,fechafin,numero_Pruebas} = prueba;
    let [actualizar] = await conn.query(
      "UPDATE pruebas SET id_prueba = ? WHERE id_prueba = ?",
      [ id_prueba,fechainicio,fechafin,numero_Pruebas]
    );
    return {id_prueba:actualizar,...prueba};
  }
  async eliminarPrueba(prueba){

    let [eliminar] = await conn.query('DELETE FROM proyecto WHERE id_prueba = ?',        
    );
    return {id_prueba:eliminar,...prueba}

}

}

module.exports = Pruebas;
