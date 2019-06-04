const status = require('http-status');

let _user;  //representa el modelo

const getAll = (req, res) => {
    _user.find({})
        .then(users=>{
               res.status(200);
            res.json({
                code:200,
                msg:"Consulta exitosa",
                detail:users
            });
        })
        .catch(error =>{
            res.status(400);
            res.json({
                code:400,
                msg:"Error...",
                detail:error
            });
        });

};

const create = (req,res)=>{
    const user = req.body; //se recibe un JSON en body y se guarda en user
       
    _user.create(user)
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

const  deleteUser = (req,res) =>{
    const {id} = req.params; //destructor
    _user.remove({_id:id})
    .then(data=>{
        res.status(200);
        res.json({
            code:200,
            msg:"Se ha elimininado el registro",
            detail:data
        })
    })
    .catch(error=>{
        res.status(400);
        res.json({
            code:400,
            msg:"No se pudo eliminar",
            detail:error
        });
    });

};

const getById = (req, res)=>{
    const id = req.params.id;
    _user.find({_id:id})
    .then(user=>{
            res.status(200);
            res.json({
                code:200,
                msg:"Exito",
                detail:user
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

const putUser = (req, res)=>{

    const {id} = req.params; //destructor
    
    _user.update({_id:id},{password:"holi123"})
    .then(data=>{
        res.status(200);
        res.json({
            code:200,
            msg:"Se ha actualizado correctamente",
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

/*const getEmail = (req,res)=>{

    _user.find({})
    .then(users=>{
        res.status(200);
        res.json({
            code:200,
            msg:"Correo enviado con éxito",
            details: users
        })
    })
    .catch();

};*/

module.exports = (User)=>{
    _user = User;
    return({

        getAll, create, deleteUser, getById, putUser

    });
}