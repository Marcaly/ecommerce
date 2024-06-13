import { DataTypes, Model } from 'sequelize';
import createSequelizeInstance from '../config/database.js';

const sequelize = createSequelizeInstance();

class Cart extends Model{}

Cart.init({
  cart_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'user_id'
    },
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
},
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize,
  modelName: 'Cart',
  tableName: 'cart',
  timestamps: false
});

export default Cart;