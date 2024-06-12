import User from "../models/User.js"

class UserController {
    async createUser(req, res) {
        try {
          const user = await User.createUser(req.body);
          res.status(201).json( {user , message: "User successfully created" })
        } catch (error) {
          console.error(error)
          res.status(500).json({ message: "Internal server error" });
        }
      };
}
export default new UserController();