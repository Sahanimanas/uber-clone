const usermodel = require('../models/user_model');

const createuser = async ({firstname,lastname,email,password}) =>{
    if(!firstname || !email || !password){
        throw new error('not enough data')
    }
    const user = await usermodel.create({
        fullname:{firstname,lastname},
        email,
        password
    })
    return user
}

module.exports = createuser