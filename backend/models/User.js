import { DataTypes, Model } from 'sequelize';
import createSequelizeInstance from '../config/database.js';

const sequelize = createSequelizeInstance();

class User extends Model{

  static async createUser(userData) {
    try {
        const newUser = await User.create(userData);
        return newUser;
    } catch (error) {
        console.error('Error creating user:', error);
        throw new Error(`Failed to create user: ${error.message}`);
    }
};

}

User.init({
  userId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  sequelize,
  modelName: 'User',
  tableName: 'Users',
  timestamps: false
});

export default User;