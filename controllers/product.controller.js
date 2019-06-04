const status = require('http-status');

let _product;  //representa el modelo

const getAll = (req, res) => {
    _product.find({})
    .then(products=>{
           res.status(200);
        res.json({
            code:200,
            msg:"Consulta exitosa",
            detail:products
        })
        .catch(error =>{
            res.status(400);
            res.json({
                code:400,
                msg:"Error...",
                detail:error
            });
        });
    });
};

const create = (req,res)=>{

    const product = req.body; //se recibe un JSON en body y se guarda en product
    _product.create(product)
    .then(data=>{ //OK
        console.log(data);
        res.status(200);
        res.json({
            code:200,
            msg:"Saved!", 
            detail:data
        });
    })
    .catch(error =>{ //CC algo sale mal
        console.log(error);
        res.status(400);
        res.json({
            code:400,
            msg:"No se pudo insertar",
            detail: error
        });
    });
};

const  deleteProduct = (req,res) =>{
    const {id} = req.params; //destructor

    _product.remove({_id:id})
    .then(data=>{
        res.status(200);
        res.json({
            code:200,
            msg:"Se elimino",
            detail:data
        })
    })
    .catch(error=>{
        res.status(400);
        res.json({
            code:400,
            msg:"no se elimino",
            detail:error
        });
    });
        

};

const getById = (req, res)=>{
    const id = req.params.id;

    _product.find({_id:id})
        .then(product=>{
                res.status(200);
                res.json({
                    code:200,
                    msg:"Exito",
                    detail:product
                })
        })
        .catch(error=>{
            res.status(400);
            res.json({
                code:400,
                msg:"Error...",
                detail:error
    
            });
        });
};

const putProduct = (req, res)=>{

    const {id} = req.params; //destructor
    
    _product.update({_id:id},{name:"pegamento"})
    .then(data=>{
        res.status(200);
        res.json({
            code:200,
            msg:"Se actualizo",
            detail:data

        })
    })
    .catch(error=>{
        res.status(400);
        res.json({
            code:400,
            msg:"Error...",
            detail:error
}); 
    });

};

module.exports = (Product)=>{
    _product = Product;
    return({
        getAll, create, deleteProduct, getById, putProduct

    });
}