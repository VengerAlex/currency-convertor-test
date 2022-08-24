const UserModel = require("../models/user-module");
const UserDto = require("../dtos/user-dto");
const TokenService = require("../service/token-service");

const bcrypt = require('bcrypt');
const GEN_SALT = 10;

class UserService {
    async registration(email, password, fullName){
        const candidate = await UserModel.findOne({email});

        if (candidate){
            return {message: `User with email ${email} already exist`}
        }

        const hashedPassword = await bcrypt.hash(password, GEN_SALT);

        const user = await UserModel.create({email, password: hashedPassword, fullName});
        const userDto = new UserDto(user);
        const token = TokenService.generateToken({...userDto});

        return {token, user: userDto};
    }
}

module.exports = new UserService();