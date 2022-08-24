const UserService = require("../service/user-service");

class UserController {
    async registration(req, res){
        try {
            const {email, password, fullName} = req.body;

            const userDate = await UserService.registration(email, password, fullName);

            return res.json(userDate);
        } catch(error){
            res.status(500).json({
                message: 'Не удалось зарегистрироваться',
            });
        }
    }
}

module.exports = new UserController();