import { DataTypes, Model } from 'sequelize';
import createSequelizeInstance from '../config/database.js';

const sequelize = createSequelizeInstance();

class CartItem extends Model{}

CartItem.init({
  cartItem_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  cart_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'carts',
      key: 'cart_id'
    },
    allowNull: true
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'products',
      key: 'product_id'
    },
    allowNull: true
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
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
  modelName: 'CartItem',
  tableName: 'cartItems',
  timestamps: false
});

export default CartItem;