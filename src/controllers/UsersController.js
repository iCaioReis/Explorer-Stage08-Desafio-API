const { hash, compare } = require("bcryptjs"); 
const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class UsersController{
    async create(req, res){
        const { name, email, password } = req.body;

        const checkUserExists = await knex("users").where({ email });
        

        if (JSON.stringify(checkUserExists) != "[]"){
            throw new AppError("E-mail já cadastrado!");
        }

        const hashedPassword = await hash(password, 8);

        await knex("users").insert({ name, email, password: hashedPassword });

        return res.status(201).json();
    }
}

module.exports = UsersController;