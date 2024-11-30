const Tester = require('../models/tester');
const testerInstancia = new Tester();

exports.traerTester= async(req,res)=>{
    try{
        let rest = await  testerInstancia.listartester();
        res.json(rest)

    }catch(error){
        res.json({error: "error al obtener tester"});

    }
};

exports.guardartester= async(req,res)=>{
    try{
        let resultado =await testerInstancia.guardartester(req.body);
        res.json(resultado)

    }catch(e){
        res.json ({e:"error al agregar tester "})


    }
  
    res.json({mensaje :'ruta de tester post'});

};

exports.actualizartester = async(req,res)=>{
    console.log("ruta de tester actualizar")
    res.json({ mensaje: 'ruta de tester put'});

};

exports.eliminartester= async (req,res)=>{
    console.log("ruta de tester eliminar")
    res.json({ mensaje: 'ruta de tester eliminar'});


};
exports.testermasPruebas = async (req, res) => {
    try {
        const resultado = await testerInstancia.testermasPruebas();
        res.json(resultado);
    } catch (error) {
        console.log(error);
        res.json({ error: 'Error al obtener el tester con más pruebas' });
    }
};