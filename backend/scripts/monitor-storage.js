/**
 * Storage Monitoring Script
 * Monitor MongoDB Atlas storage usage for 512MB free tier
 * 
 * Run this script anytime to check storage usage:
 * node backend/scripts/monitor-storage.js
 */

const mongoose = require('mongoose');
require('dotenv').config();

const monitorStorage = async () => {
  try {
    console.log('📊 MongoDB Atlas Storage Monitor\n');
    console.log('═'.repeat(60) + '\n');

    // Connect to MongoDB
    const mongoURI = process.env.MONGODB_URI;
    await mongoose.connect(mongoURI, {
      maxPoolSize: 5,
      serverSelectionTimeoutMS: 5000,
    });

    const db = mongoose.connection.db;

    // 1. DATABASE STATISTICS
    console.log('📈 DATABASE STATISTICS\n');
    const stats = await db.stats();
    
    const dataSize = (stats.dataSize / 1024 / 1024).toFixed(2);
    const storageSize = (stats.storageSize / 1024 / 1024).toFixed(2);
    const indexSize = (stats.indexSize / 1024 / 1024).toFixed(2);
    const totalSize = parseFloat(storageSize) + parseFloat(indexSize);
    const usagePercent = ((totalSize / 512) * 100).toFixed(2);

    console.log(`Database Name:     ${stats.db}`);
    console.log(`Collections:       ${stats.collections}`);
    console.log(`Documents:         ${stats.objects.toLocaleString()}`);
    console.log(`Data Size:         ${dataSize} MB`);
    console.log(`Storage Size:      ${storageSize} MB`);
    console.log(`Index Size:        ${indexSize} MB`);
    console.log(`Total Size:        ${totalSize.toFixed(2)} MB`);
    console.log(`Free Tier Limit:   512 MB`);
    console.log(`Usage:             ${usagePercent}%`);
    console.log(`Available:         ${(512 - totalSize).toFixed(2)} MB\n`);

    // 2. COLLECTION DETAILS
    console.log('═'.repeat(60));
    console.log('📦 COLLECTION DETAILS\n');

    const collections = await db.listCollections().toArray();
    
    for (const collInfo of collections) {
      const collName = collInfo.name;
      const collStats = await db.collection(collName).stats();
      
      const collSize = (collStats.storageSize / 1024).toFixed(2);
      const collIndexSize = (collStats.totalIndexSize / 1024).toFixed(2);
      const avgDocSize = collStats.count > 0 ? 
        (collStats.size / collStats.count / 1024).toFixed(2) : 0;
      
      console.log(`${collName}:`);
      console.log(`  Documents:        ${collStats.count.toLocaleString()}`);
      console.log(`  Storage Size:     ${collSize} KB`);
      console.log(`  Index Size:       ${collIndexSize} KB`);
      console.log(`  Avg Doc Size:     ${avgDocSize} KB`);
      console.log(`  Indexes:          ${collStats.nindexes}`);
      console.log('');
    }

    // 3. USER COLLECTION ANALYSIS
    console.log('═'.repeat(60));
    console.log('👥 USER COLLECTION ANALYSIS\n');

    const usersCollection = db.collection('users');
    const userCount = await usersCollection.countDocuments();
    const activeUsers = await usersCollection.countDocuments({ isActive: true });
    const verifiedUsers = await usersCollection.countDocuments({ isEmailVerified: true });

    // Sample user document to check size
    const sampleUser = await usersCollection.findOne({});
    const sampleUserSize = sampleUser ? 
      JSON.stringify(sampleUser).length / 1024 : 0;

    console.log(`Total Users:       ${userCount.toLocaleString()}`);
    console.log(`Active Users:      ${activeUsers.toLocaleString()}`);
    console.log(`Verified Users:    ${verifiedUsers.toLocaleString()}`);
    console.log(`Sample Doc Size:   ${sampleUserSize.toFixed(2)} KB`);

    // Calculate user array sizes
    if (sampleUser) {
      console.log('\nArray Field Sizes (sample user):');
      console.log(`  Quiz Progress:    ${sampleUser.quizProgress?.length || 0} items`);
      console.log(`  Bookmarks:        ${sampleUser.bookmarks?.length || 0} items`);
      console.log(`  Achievements:     ${sampleUser.achievements?.length || 0} items`);
      console.log(`  Activity Log:     ${sampleUser.activityLog?.length || 0} items`);
      console.log(`  App Progress:     ${sampleUser.applicationProgress?.length || 0} items`);
    }

    // 4. CAPACITY ESTIMATES
    console.log('\n' + '═'.repeat(60));
    console.log('💡 CAPACITY ESTIMATES\n');

    const availableSpace = (512 - totalSize) * 1024; // Convert to KB
    const avgUserSize = sampleUserSize > 0 ? sampleUserSize : 10; // Default 10KB
    const estimatedNewUsers = Math.floor(availableSpace / avgUserSize);
    const estimatedTotalCapacity = Math.floor((512 * 1024) / avgUserSize);

    console.log(`Available Space:        ${availableSpace.toFixed(2)} KB`);
    console.log(`Avg User Doc Size:      ${avgUserSize.toFixed(2)} KB`);
    console.log(`New Users Possible:     ~${estimatedNewUsers.toLocaleString()}`);
    console.log(`Total Capacity:         ~${estimatedTotalCapacity.toLocaleString()} users`);
    console.log(`Current Progress:       ${((userCount / estimatedTotalCapacity) * 100).toFixed(2)}%`);

    // 5. STORAGE HEALTH
    console.log('\n' + '═'.repeat(60));
    console.log('🏥 STORAGE HEALTH\n');

    const healthStatus = usagePercent < 50 ? '🟢 HEALTHY' : 
                        usagePercent < 75 ? '🟡 MODERATE' : 
                        usagePercent < 90 ? '🟠 WARNING' : '🔴 CRITICAL';

    console.log(`Status: ${healthStatus}`);
    
    if (usagePercent < 50) {
      console.log('✅ Storage usage is optimal');
    } else if (usagePercent < 75) {
      console.log('⚠️  Storage usage is moderate - monitor regularly');
    } else if (usagePercent < 90) {
      console.log('⚠️  Storage usage is high - consider optimization');
      console.log('   • Archive old user data');
      console.log('   • Clean up inactive users');
      console.log('   • Reduce array field limits');
    } else {
      console.log('🚨 CRITICAL: Storage is nearly full!');
      console.log('   • Immediate action required');
      console.log('   • Delete inactive users');
      console.log('   • Archive historical data');
      console.log('   • Consider upgrading to paid tier');
    }

    // 6. RECOMMENDATIONS
    console.log('\n' + '═'.repeat(60));
    console.log('💡 OPTIMIZATION RECOMMENDATIONS\n');

    console.log('✓ Implement data archiving for users inactive > 90 days');
    console.log('✓ Set up automated cleanup of old activity logs');
    console.log('✓ Monitor storage weekly using this script');
    console.log('✓ Use pagination (limit 10-20) for all list queries');
    console.log('✓ Compress large text fields before storage');
    console.log('✓ Consider upgrading if usage exceeds 80%\n');

    console.log('═'.repeat(60));
    console.log('\n✅ Monitoring completed!\n');

  } catch (error) {
    console.error('❌ Error monitoring storage:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    process.exit(0);
  }
};

// Run monitoring
monitorStorage();
