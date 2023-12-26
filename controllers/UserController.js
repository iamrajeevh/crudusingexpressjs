const sequelize = require('sequelize')
const db = require('../models/index')
const UserSchema = db.users
const getUsers = async (req,res) => {
    let usersData = await UserSchema.findAll();
    return res.send({'data':usersData})
}

const getUserDetails = async (req, res) => {
    return res.send('User Details');
}

const createUser = async (req, res) => {
    console.log('req',req.body)
    const {user_name,user_email,user_mobile} = req.body;
    if(isEmpty(user_name)|| isEmpty(user_email)  || isEmpty(user_mobile)){
       return res.send({error:'All Fields Are Mandatory'})
    }
    UserSchema.create({
        user_name: user_name,
        user_email: user_email,
        user_mobile: user_mobile,
    }).then((user) => res.status(201).send(user)).catch((error) => {
        console.log(error);
        res.status(400).send(error);
    });
    //return res.send({requestBody:req.body});
}
const updateUser = async (req, res) => {
    const {user_name,user_email,user_mobile} = req.body;
    let  user_id = req.params.id;
    if( isEmpty(user_id)){
        return res.send({error:'User Id is required'})
    }
    user_id  = parseInt(user_id);
    UserSchema.update(
        // Values to update
        {
            user_name:user_name,
            user_email:user_email,
            user_mobile:user_mobile

        },
        { // Clause
            where: 
            {
                id: user_id
            }
        }
    ).then(count => {
        console.log('Rows updated ' + count);
        return res.send('User updated successfully')
    }).catch(function(e) {
        console.log("Project update failed !");
        return res.send(e)
    });
    // return res.send('User updated successfully');
}
const deleteUser = async (req, res) => {
    // const user_id = req.query.id;
    const user_id = parseInt(req.params.id);
    
    if(isEmpty(user_id)){
        return res.send({error:'User Id can not be null'});
    }
    UserSchema.destroy({
        where: {
            id: user_id
        }
    })
    .then(function (deletedRecord) {
        if(deletedRecord === 1){
            return res.status(200).json({message:"Deleted successfully"});          
        }
        else
        {
            return res.status(404).json({message:"record not found"})
        }
    })
    .catch(function (error){
        res.status(500).json(error);
    });
    // return res.send({mssg:'User Deleted Succesffully'+user_id,deltedUser:delted_user,typeOf:typeof user_id});
}

const isEmpty = (value) => {
    
    if(value==="" || value===undefined || value===null ||  value=='undefined'){
        
        return true;
    }
    return false;
}
module.exports = {
    getUsers,
    getUserDetails,
    createUser,
    updateUser,
    deleteUser
}