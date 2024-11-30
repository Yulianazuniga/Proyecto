const conn = require('../config/bd');

class tester{
    async listartester(){
        let [lista] = await connect.query('SELECT * FROM tester');
        return lista;
    };
    async guardartester(tester){
        let {id_tester,nombre,apellido,numero_veces}= tester;
        console.log(tester)
        let [guardar] = await connect.query('insert into tester(id_tester,nombre, apellido,numero_veces) values(?,?,?,?,)'
            [id_tester,nombre, apellido,numero_veces]
        );
        return{id_tester: guardar.insertid,...tester};
    }
    async actualizartester (id_tester,tester){
        let {nombre} = tester;
        let [actualizar] = await db.connect.query ('UPDATE proyecto SET nombre_tester= ? WHERE id = ?',
            [nombre, id_tester]
        );
        return actualizar.affectedRows > 0;
    }
    async eliminartester(id){
        let [eliminar] = await db.connect.query('DELETE FROM tester WHERE id_tester = ?',        
        );
        return {mensaje:`tester con id ${id} eliminado`}
    }
    
}
module.exports = tester;
