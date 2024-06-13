import { DataTypes, Model } from 'sequelize';
import createSequelizeInstance from '../config/database.js';

const sequelize = createSequelizeInstance();

class Order extends Model{}

Order.init({
  order_id: {
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
  order_date: {
    type: DataTypes.DATE
  },
  status: {
    type: DataTypes.ENUM('pending', 'completed', 'shipped', 'delivered', 'cancelled'),
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
  modelName: 'Order',
  tableName: 'Orders',
  timestamps: false
});

export default Order;