const mongoose = require('mongoose');
require('dotenv').config();
const User = require('../models/User');

// Community posts/tips template
const tipTemplates = [
  {
    category: 'Windows Shortcuts',
    tips: [
      { title: "Master Copy-Paste", content: "Don't just use Ctrl+C and Ctrl+V. Try Ctrl+Shift+V for paste without formatting - saves tons of time!", helpful: true },
      { title: "Window Snapping Pro Tip", content: "Win + Arrow keys for window snapping is a game changer! Win + Left/Right snaps to sides, Win + Up maximizes.", helpful: true },
      { title: "Virtual Desktops", content: "Use Win + Tab to create multiple desktops. Win + Ctrl + D creates new desktop, Win + Ctrl + Left/Right switches between them.", helpful: true },
      { title: "Quick Search", content: "Win + S opens search instantly. No need to click the taskbar!", helpful: false },
      { title: "Task Manager Shortcut", content: "Ctrl + Shift + Esc opens Task Manager directly without the security screen. Much faster!", helpful: true }
    ]
  },
  {
    category: 'Mac Shortcuts',
    tips: [
      { title: "Spotlight is Powerful", content: "Cmd + Space for Spotlight, then type math equations, unit conversions, or file names. It's like a mini calculator!", helpful: true },
      { title: "Screenshot Like a Pro", content: "Cmd + Shift + 4 lets you select area for screenshot. Add Ctrl to copy to clipboard instead of saving file.", helpful: true },
      { title: "Force Quit Menu", content: "Cmd + Option + Esc opens Force Quit menu when apps freeze. Lifesaver!", helpful: true },
      { title: "Mission Control", content: "Three finger swipe up on trackpad or F3 shows all windows. Makes multitasking so much easier!", helpful: true },
      { title: "Hidden Dock Trick", content: "Cmd + Option + D toggles dock auto-hide. More screen space for work!", helpful: false }
    ]
  },
  {
    category: 'Excel Tips',
    tips: [
      { title: "Flash Fill Magic", content: "Type a pattern in first two cells, then Ctrl+E to auto-fill the rest. Excel learns the pattern!", helpful: true },
      { title: "Quick Sum", content: "Select cells and look at bottom right status bar - shows sum without formula! Alt + = also creates SUM formula automatically.", helpful: true },
      { title: "Navigate Large Sheets", content: "Ctrl + Arrow keys jumps to edge of data. Ctrl + Home returns to A1 instantly.", helpful: true },
      { title: "Format Painter", content: "Double-click Format Painter (Ctrl + Shift + C) to copy formatting to multiple places. Click once to turn off.", helpful: true },
      { title: "AutoFilter Shortcut", content: "Ctrl + Shift + L toggles AutoFilter on/off. Essential for data analysis!", helpful: true }
    ]
  },
  {
    category: 'Chrome Shortcuts',
    tips: [
      { title: "Tab Management", content: "Ctrl + T for new tab, Ctrl + W to close, Ctrl + Shift + T reopens closed tabs! Can reopen multiple tabs in order.", helpful: true },
      { title: "Incognito Quickly", content: "Ctrl + Shift + N opens incognito window instantly. No menu clicking needed.", helpful: false },
      { title: "Search Tabs", content: "Ctrl + Shift + A searches through all open tabs. Perfect when you have 50+ tabs!", helpful: true },
      { title: "Developer Tools", content: "F12 or Ctrl + Shift + I opens DevTools. Ctrl + Shift + C for element inspector.", helpful: false },
      { title: "Bookmark All Tabs", content: "Ctrl + Shift + D bookmarks all open tabs in a folder. Great for research sessions!", helpful: true }
    ]
  },
  {
    category: 'VS Code',
    tips: [
      { title: "Multi-Cursor Editing", content: "Alt + Click adds cursor anywhere. Ctrl + Alt + Up/Down adds cursor above/below. Edits everywhere at once!", helpful: true },
      { title: "Command Palette", content: "Ctrl + Shift + P opens command palette. Access every feature without memorizing shortcuts!", helpful: true },
      { title: "Quick File Open", content: "Ctrl + P opens file search. Type @ to see symbols, # to search workspace, : to go to line number.", helpful: true },
      { title: "Split Editor", content: "Ctrl + \\ splits editor. Ctrl + 1/2/3 focuses different editor groups. Great for side-by-side coding!", helpful: true },
      { title: "Zen Mode", content: "Ctrl + K then Z enters Zen mode - fullscreen, no distractions. Press Esc twice to exit.", helpful: false }
    ]
  },
  {
    category: 'General Productivity',
    tips: [
      { title: "Clipboard History", content: "Windows: Win + V shows clipboard history! Mac: use built-in or third-party apps. Game changer for copying multiple things.", helpful: true },
      { title: "Screenshot Annotations", content: "Windows: Win + Shift + S for Snip & Sketch. Mac: Cmd + Shift + 5 has markup tools built-in.", helpful: true },
      { title: "Emoji Anywhere", content: "Windows: Win + . (period) opens emoji picker. Mac: Cmd + Ctrl + Space. Works in any app!", helpful: false },
      { title: "Quick Settings", content: "Windows: Win + I opens Settings instantly. Mac: Cmd + , opens app preferences in most apps.", helpful: false },
      { title: "Lock Screen Fast", content: "Windows: Win + L locks screen. Mac: Cmd + Ctrl + Q. Essential for office security!", helpful: true }
    ]
  },
  {
    category: 'Word Processing',
    tips: [
      { title: "Style Navigation", content: "Use heading styles (Ctrl + Alt + 1/2/3) for document structure. Then Ctrl + Click in TOC to jump anywhere!", helpful: true },
      { title: "Find and Replace Power", content: "Ctrl + H for find/replace. Use wildcards for advanced patterns. Can replace formatting too!", helpful: true },
      { title: "Quick Symbols", content: "Alt + 0169 = ©, Alt + 0174 = ®, Alt + 0153 = ™. Memorize your frequently used symbols!", helpful: false },
      { title: "Navigation Pane", content: "Ctrl + F opens navigation pane in Word. Shows document outline and instant search results.", helpful: true },
      { title: "Word Count Shortcut", content: "Select text and Ctrl + Shift + G shows word count. No need to check status bar!", helpful: false }
    ]
  }
];

// Comment templates for posts
const commentTemplates = [
  "This is incredibly helpful! Thanks for sharing!",
  "Wow, I've been doing this the hard way for years! 🤦",
  "Game changer! Just tried it and it works perfectly.",
  "Can confirm this works on Windows 11 too!",
  "This saved me so much time today. Thank you!",
  "I can't believe I didn't know this before!",
  "Sharing this with my entire team. Super useful!",
  "This tip is gold! Bookmarking for future reference.",
  "Just tested this - works great! Thanks!",
  "Mind blown 🤯 This is exactly what I needed!",
  "Pro tip right here! Everyone should know this.",
  "This should be taught in every computer class!",
  "I've been looking for this for months! Thank you!",
  "Simple but effective. Love it!",
  "This just made my workflow 10x faster!",
  "Fantastic tip! Works like a charm.",
  "Why isn't this more widely known? Amazing!",
  "I use this every day now. Total productivity booster!",
  "This is the kind of content we need more of!",
  "Brilliant! Sharing with all my colleagues.",
  "Just tried it and I'm never going back to the old way!",
  "This deserves way more upvotes!",
  "Perfect timing! I was just struggling with this yesterday.",
  "So simple yet so powerful. Thanks!",
  "This is my new favorite shortcut!",
  "Can't believe I survived without knowing this!",
  "Absolute lifesaver during crunch time!",
  "This tip alone makes joining this community worth it!",
  "I teach shortcuts and even I learned something new!",
  "10/10 recommendation. Works flawlessly!"
];

// Generate random date within past 3 months
function getRandomDateInPast3Months() {
  const now = new Date();
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(now.getMonth() - 3);
  
  const randomTime = threeMonthsAgo.getTime() + Math.random() * (now.getTime() - threeMonthsAgo.getTime());
  return new Date(randomTime);
}

// Generate random number in range
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate community posts
function generateCommunityPosts(users) {
  const posts = [];
  
  tipTemplates.forEach((categoryData, catIndex) => {
    categoryData.tips.forEach((tip, tipIndex) => {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      const createdAt = getRandomDateInPast3Months();
      const likes = tip.helpful ? randomInRange(15, 150) : randomInRange(3, 30);
      const commentCount = tip.helpful ? randomInRange(5, 25) : randomInRange(0, 8);
      
      const likedBy = [];
      const numLikes = Math.min(likes, users.length);
      const shuffledUsers = [...users].sort(() => 0.5 - Math.random());
      for (let i = 0; i < numLikes; i++) {
        likedBy.push(shuffledUsers[i]._id.toString());
      }
      
      posts.push({
        id: `post_${catIndex}_${tipIndex}_${Date.now()}`,
        userId: randomUser._id.toString(),
        userEmail: randomUser.email,
        userName: randomUser.name,
        userAvatar: randomUser.avatar,
        title: tip.title,
        content: tip.content,
        category: categoryData.category,
        likes,
        likedBy,
        commentCount,
        createdAt: createdAt.toISOString(),
        updatedAt: createdAt.toISOString()
      });
    });
  });
  
  return posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

// Generate comments for posts
function generateComments(posts, users) {
  const comments = [];
  
  posts.forEach(post => {
    const numComments = post.commentCount;
    for (let i = 0; i < numComments; i++) {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      const postDate = new Date(post.createdAt);
      const commentDate = new Date(postDate.getTime() + Math.random() * (Date.now() - postDate.getTime()));
      const commentTemplate = commentTemplates[Math.floor(Math.random() * commentTemplates.length)];
      
      comments.push({
        id: `comment_${post.id}_${i}_${Date.now()}`,
        postId: post.id,
        userId: randomUser._id.toString(),
        userEmail: randomUser.email,
        userName: randomUser.name,
        userAvatar: randomUser.avatar,
        content: commentTemplate,
        likes: randomInRange(0, 15),
        createdAt: commentDate.toISOString(),
        updatedAt: commentDate.toISOString()
      });
    }
  });
  
  return comments.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
}

// Main seeding function
async function seedCommunityData() {
  try {
    // Connect to MongoDB
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/shortcut-sensei';
    await mongoose.connect(mongoURI);
    console.log('✅ Connected to MongoDB');

    // Get all users
    const users = await User.find({}).select('_id name email avatar');
    console.log(`📊 Found ${users.length} users in database`);

    if (users.length === 0) {
      console.log('❌ No users found! Please run seed-users.js first.');
      process.exit(1);
    }

    // Generate posts and comments
    console.log('\n🔄 Generating community content...');
    const posts = generateCommunityPosts(users);
    const comments = generateComments(posts, users);

    console.log(`✅ Generated ${posts.length} posts`);
    console.log(`✅ Generated ${comments.length} comments`);

    // Save to JSON file for frontend to load
    const fs = require('fs');
    const path = require('path');
    
    const communityData = {
      posts,
      comments,
      generatedAt: new Date().toISOString(),
      stats: {
        totalPosts: posts.length,
        totalComments: comments.length,
        totalUsers: users.length,
        categories: [...new Set(posts.map(p => p.category))]
      }
    };

    const outputPath = path.join(__dirname, '../../assets/data/community-data.json');
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(communityData, null, 2));

    console.log(`\n💾 Saved community data to: ${outputPath}`);
    console.log('\n📊 Summary:');
    console.log(`   Posts: ${posts.length}`);
    console.log(`   Comments: ${comments.length}`);
    console.log(`   Categories: ${communityData.stats.categories.join(', ')}`);
    console.log(`   Total Interactions: ${posts.reduce((sum, p) => sum + p.likes, 0)} likes`);

    await mongoose.connection.close();
    console.log('\n✅ Database connection closed');
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
}

// Run the seeder
seedCommunityData();
