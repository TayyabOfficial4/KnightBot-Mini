/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['923401566446'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Muhammad Tayyab'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Tayyab X MD',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUXZOiOBT9L3nVGhD5tKqrRkARUVtFRd2ahwgBghAgBBWn/O9b2NPd87A72/sWEurcc8+55/4EJMcVclADBj9BQfEFMtQeWVMgMAB6HYaIgi4IIINgAFZjF4+UYlWex6OFpgS4uC/UWt8vzWZJzSXcK3tdGd3290x9AY8uKOpTiv0/AGbz0DTw3OYKFkpDpt/m4djYarr36gg7moaKWVJ5kiy3Wf4CHi0ixBSTaFTEKEMUpg5qlhDTr9GH0xAVaLNGphSJ6mRSxfnGY3Y8u4k17dhDyb2nF5MTrz3+a/QlKZEm+7v22iQBjJxEPXjwNc6cy/QGpxYJ2Tg55BuLwWv0Rr/CEUGBHSDCMGu+rHu0KGoRr4e3vMDOdhFxaqFdsi13Si5KLE2PM+9GOvuLHHr514jvJtJsfuZUXSzt0Ww3LabawsHCaE0mhtfIIq9SpKwSNNmKvxNf0vdZOf8f3SPr1O9PxmRW7JNcPUJmF5PNVRoeJpLkRnh1Xc9W1bmU5NH1a/QhC5QJ1danjR/GQ+uME9tfe07cEcK+na5WTjrplPvjNNjNP+lDVtM/sdwdk2rJQWfuWQhH/GF3FJTdKV80TRGrzk2vnORYbkIu9vFtFEVB52T3JNmPj9d8PQuSEZRwSTaHebSkLhGt0048Mv368uzojBo7AIPeowsoinDFKGQ4J887RewCGFxc5FPEnvICvhyP7agDL+sm6G3Hxvm1mWY3rlT5GGmZNmaNqtZkCxF/fgFdUNDcR1WFggmuWE6bOaoqGKEKDP760QUE3dibcW25fq8LQkwrtiV1keYweHf1/RH6fl4T5jbEN9oDomDAf14jxjCJqlbHmkDqx/iCjBiyCgxCmFboo0NEUQAGjNboI7VGHrTC983eSlfWa9AF2dMQHIAB0GRRUeVeT5MFnh/I36tv1xYWFsU3ghjogvT5myDKvMqriiBLgiZpA/l7e//4INjiBYhBnFZgAIyprHFyPh7NS1VbDC1raEdDIxqCz4beJ+NNeUc+RuL5oC2FxjnuCnzWHekeuocxCcy1dqKHfed+Pau9xBi+/AMIGIA1JEtcBcuiQXdaBQdXkU1eu8R8P5GWuuXma+LWlblqZG8h+K+0FPZVKTscH3d2Vy4nSr1Id+mWV1MSHPozjBrLGK5e2moBumAf/V5scY5q2NFIz8SQZNzcg4438h3RdUe1YwlerLvXjRdtGyvZecy8WOVaHce50feQoahYjLkRTfTSJVV8SO+LnQkXRzN6m9lnZtJfuwo/p6m1qv0MMXpGn8DWwP+27o14O2H8o/sbxq9l8i+B1N06O7xOreVGq3C2g4di6NZ+n8/0Y3/Fh54sjLlKnS4Xh2sEHo8fXVCkkIU5zdoVQQKa4wB0Ac3rdmRtEuZ/KGbotm0Mo0XbeQorNvyMwQZnqGIwK9qwqryg9QVeePwN8tC/XDwHAAA=',
    newsletterJid: '120363407098949187@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Tayyab X MD',
    
    // Bot Behavior
    selfMode: true, // Private mode - only owner can use commands
    autoRead: true,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: true, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: true,
      nsfw: true,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Karachi',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/TayyabTechX',
      instagram: 'https://instagram.com/TayyabTechX',
      youtube: 'http://youtube.com/@TayyabTechX'
    }
};
