const Pruebas = require('../models/pruebas');
const pruebasInstancia = new Pruebas();

exports.traerPrueba= async(req,res)=>{
    try{
        let rest = await  pruebasInstancia.listarPrueba();
        res.json(rest)

    }catch(error){
        res.json({error: "error al obtener pruebas"});

    }
};

exports.adicionarPrueba= async(req,res)=>{
    try{
        let resultado =await pruebasInstancia.guardarPruebas(req.body);
        res.json(resultado)

    }catch(e){
        res.json ({e:"error al agregar pruebas "})


    }
  


};

exports.actualizarPrueba = async(req,res)=>{
    console.log("ruta de pruebas actualizar")
    res.json({ mensaje: 'ruta de pruebas put'});

};

exports.eliminarPrueba= async (req,res)=>{
    console.log("ruta de pruebas eliminar")
    res.json({ mensaje: 'ruta de pruebas eliminar'});


};