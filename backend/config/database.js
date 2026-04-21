const mongoose = require('mongoose');
require('dotenv').config();
const { databaseOptions } = require('./production-config');

const connectDB = async () => {
  try {
    const mongoURI = process.env.SUPABASE_CONNECTION_STRING || 'supabase://localhost:27017/shortcut-sensei';

    const options = { ...databaseOptions };

    const conn = await mongoose.connect(mongoURI, options);

    console.log(`Supabase Postgres Connected: ${conn.connection.host}`);

    // Handle connection events
    mongoose.connection.on('error', (err) => {
      console.error('Supabase Postgres connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('Supabase Postgres disconnected');
    });

    // Graceful shutdown - only set up once
    if (!process.listenerCount('SIGINT')) {
      process.on('SIGINT', async () => {
        await mongoose.connection.close();
        console.log('Supabase Postgres connection closed through app termination');
        process.exit(0);
      });
    }

    return true;

  } catch (error) {
    console.error('Error connecting to Supabase Postgres:', error.message);
    return false;
  }
};

module.exports = connectDB;