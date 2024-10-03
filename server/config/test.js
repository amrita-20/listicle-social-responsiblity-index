import { pool } from './database.js';

const testConnection = async () => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Connection successful:', res.rows);
  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    pool.end();
  }
};

testConnection();