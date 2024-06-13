'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cartItems', {
      cartItem_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      cart_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'carts',
          key: 'cart_id'
        },
        allowNull: true
      },
      product_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'products', 
          key: 'product_id'  
        },
        allowNull: false
      },
      quantity: {
        type: Sequelize.DataTypes.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cartItems');
  }
};