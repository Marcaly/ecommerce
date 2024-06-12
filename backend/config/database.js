import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' }); 

const createSequelizeInstance = () => {
    const sequelize = new Sequelize(process.env.MYSQLDB_DATABASE, process.env.MYSQLDB_USER, process.env.MYSQLDB_PASSWORD, {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql'
      });      

    sequelize.authenticate()
        .then(() => {
            console.log('MYSQL CONNECTED...');
        })
        .catch((error) => {
            console.error('Error connecting to MySQL.', error);
        })
    return sequelize;
}
export default createSequelizeInstance; 