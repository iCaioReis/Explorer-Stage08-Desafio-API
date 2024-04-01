const { hash, compare } = require("bcryptjs"); 
const knex = require("../database/knex");

const sqliteConnection = require("../database/sqlite");

class UsersController{
    async create(req, res){
        const { name, email, password, avatar } = req.body;
    }
    async upadate(req, res){

    }
}

module.exports = UsersController;