const Proyecto = require('../models/proyecto');
const proyectoInstancia = new Proyecto();

exports.traerProyecto = async (req, res) => {
    try {
        let rest = await proyectoInstancia.listarTodos();
        res.json(rest);
    } catch (error) {
        res.json({ error: "Error al obtener proyectos" });
    }
};



exports.adicionarProyectos = async (req, res) => {
    try {
        let resul = await proyectoInstancia.guardarProyecto(req.body); // Asegúrate de que 'guardarProyecto' esté definido en tu modelo
        res.json(resul);
    } catch (error) {
        res.json({ error: "Error al agregar proyectos" });
    }
};

exports.actualizarProyecto= async (req,res)=>  {
    try{ 
        let respuesta = await proyectoInstancia.actualizarproyectos(req.params.id,req.body);
        if(respuesta == 0 ){
        return res.json({mensaje : "proyecto no encontrada o no actualizada"});
        }
        else{
            return res.json({mensaje: " proyecto actualizado"})
        }

    }catch(e){
        res.json("ERROR AL ACTUALIZAR");
}
};

exports.eliminarProyecto = async (req,res)=>{
    try{
       let borrar = await proyectoInstancia.eliminarProyecto(req.params.id);
       res.json({borrar})

    }catch(e){

    }
    exports.proyectomasPruebas = async (req, res) => {
        try {
            const proyecto = await proyectoInstancia.proyectomasPruebas();
            res.json(proyecto);
        } catch (error) {
        
            res.json({ error: 'Error al obtener el proyecto con más pruebas' });
        }
    };
}


    


