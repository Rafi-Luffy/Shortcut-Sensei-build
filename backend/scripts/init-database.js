/**
 * Database Initialization Script
 * Optimized for Supabase Postgres Atlas 512MB Free Tier
 * 
 * Run this script once after connecting to Supabase Postgres Atlas:
 * node backend/scripts/init-database.js
 */

const mongoose = require('mongoose');
require('dotenv').config();

const initializeDatabase = async () => {
  try {
    console.log('🚀 Starting database initialization...\n');

    // Connect to Supabase Postgres
    const mongoURI = process.env.SUPABASE_CONNECTION_STRING;
    await mongoose.connect(mongoURI, {
      maxPoolSize: 10,
      minPoolSize: 2,
      serverSelectionTimeoutMS: 5000,
    });
    console.log('✅ Connected to Supabase Postgres Atlas\n');

    // Get database reference
    const db = mongoose.connection.db;

    // 1. CREATE COLLECTIONS (if they don't exist)
    console.log('📦 Creating collections...');
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map(c => c.name);

    if (!collectionNames.includes('users')) {
      await db.createCollection('users', {
        validator: {
          $jsonSchema: {
            bsonType: 'object',
            required: ['email', 'displayName'],
            properties: {
              email: { bsonType: 'string' },
              displayName: { bsonType: 'string' },
              password: { bsonType: 'string' },
              isEmailVerified: { bsonType: 'bool' }
            }
          }
        }
      });
      console.log('   ✓ Created users collection');
    } else {
      console.log('   ✓ Users collection already exists');
    }

    // 2. CREATE INDEXES FOR OPTIMAL QUERY PERFORMANCE
    console.log('\n📊 Creating indexes for query optimization...');
    
    const usersCollection = db.collection('users');
    
    // Primary indexes
    await usersCollection.createIndex({ email: 1 }, { unique: true, background: true });
    console.log('   ✓ Email index (unique)');
    
    await usersCollection.createIndex({ createdAt: -1 }, { background: true });
    console.log('   ✓ CreatedAt index (for recent users)');
    
    await usersCollection.createIndex({ isActive: 1, lastLogin: -1 }, { background: true });
    console.log('   ✓ Active users index');
    
    // Leaderboard optimization - CRITICAL for performance
    await usersCollection.createIndex(
      { 'quizProgress.score': -1 }, 
      { background: true, sparse: true }
    );
    console.log('   ✓ Quiz score index (for leaderboard)');
    
    // Compound index for filtered leaderboards
    await usersCollection.createIndex(
      { isActive: 1, 'quizProgress.score': -1 },
      { background: true }
    );
    console.log('   ✓ Compound index (active users + scores)');

    // 3. DATABASE STATISTICS
    console.log('\n📈 Database Statistics:');
    const stats = await db.stats();
    console.log(`   • Database: ${stats.db}`);
    console.log(`   • Collections: ${stats.collections}`);
    console.log(`   • Data Size: ${(stats.dataSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   • Storage Size: ${(stats.storageSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   • Indexes: ${stats.indexes}`);
    console.log(`   • Index Size: ${(stats.indexSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   • Free Tier Limit: 512 MB`);
    console.log(`   • Used: ${((stats.storageSize / (512 * 1024 * 1024)) * 100).toFixed(2)}%`);

    // 4. OPTIMIZATION RECOMMENDATIONS
    console.log('\n💡 Optimization Tips:');
    console.log('   • Limit array sizes in user documents (quizProgress, bookmarks, etc.)');
    console.log('   • Use aggregation pipeline for complex queries');
    console.log('   • Implement pagination for all list endpoints');
    console.log('   • Archive old data periodically');
    console.log('   • Use compression for data transfer (enabled in config)');
    console.log('   • Monitor storage usage regularly');

    // 5. ESTIMATED CAPACITY
    const avgUserSize = 10; // KB per user document (estimated)
    const availableSpace = 512 * 1024; // 512 MB in KB
    const estimatedUsers = Math.floor(availableSpace / avgUserSize);
    console.log(`\n👥 Estimated Capacity:`);
    console.log(`   • Approximate users supported: ~${estimatedUsers.toLocaleString()} users`);
    console.log(`   • Assuming ${avgUserSize}KB per user document`);
    console.log(`   • With optimized array limits applied`);

    console.log('\n✅ Database initialization completed successfully!\n');

  } catch (error) {
    console.error('❌ Error initializing database:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Disconnected from Supabase Postgres\n');
    process.exit(0);
  }
};

// Run initialization
initializeDatabase();
