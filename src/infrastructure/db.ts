import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.NEON_URL || 'postgres://default:default@localhost:5432/default', {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
    logging: false,
});

export const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected successfully to the PostgreSQL database');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1);
    }
};

export default sequelize;