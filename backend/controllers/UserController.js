import User from "../models/User.js"

class UserController {
    async createUser(req, res) {
          const user = await User.createUser(req.body);
        } catch (error) {
          console.error(error)
          res.status(500).json({ message: "Internal server error" });
        }
      };

export default new UserController();