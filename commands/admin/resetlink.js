/**
 * Reset Link Command - Revoke old group invite link and create a new one
 * Usage: .resetlink
 */

module.exports = {
    name: 'resetlink',
    aliases: ['newlink', 'refreshlink', 'regeneratelink'],
    category: 'admin',
    description: 'Revoke old group invite link and create a new one',
    usage: '.resetlink',
    groupOnly: true,
    adminOnly: true,
    botAdminNeeded: true,
    
    async execute(sock, msg, args, extra) {
      try {
        // Show loading message
        await extra.reply('⏳ Processing... Generating new group link...');
        
        // Revoke the old invite code
        await sock.groupRevokeInvite(extra.from);
        
        // Wait a moment for the revoke to take effect
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Generate the new invite code
        const newCode = await sock.groupInviteCode(extra.from);
        const newLink = `https://chat.whatsapp.com/${newCode}`;
        
        // Get group info
        const groupName = extra.groupMetadata.subject || 'Group';
        
        let text = `✅ *GROUP LINK RESET SUCCESSFULLY*\n\n`;
        text += `📱 Group: ${groupName}\n`;
        text += `🔗 New Link: ${newLink}\n\n`;
        text += `✨ Old link has been revoked!\n`;
        text += `⚠️ Don't share this link publicly!\n\n`;
        text += `🕐 Link was reset at: ${new Date().toLocaleTimeString()}`;
        
        await extra.reply(text);
        
        // Optional: Log the action
        console.log(`✅ Group link reset for: ${groupName} (${extra.from})`);
        
      } catch (error) {
        console.error('Error in resetlink command:', error);
        
        // Handle specific errors
        if (error.message.includes('403') || error.message.includes('forbidden')) {
          await extra.reply(`❌ *Error:* Bot needs to be admin to reset group link!\n\nMake sure the bot has admin privileges.`);
        } else if (error.message.includes('group') || error.message.includes('not found')) {
          await extra.reply(`❌ *Error:* Unable to access group information!\n\nTry again later.`);
        } else {
          await extra.reply(`❌ *Error:* ${error.message || 'Failed to reset group link'}\n\nMake sure the bot is admin of this group.`);
        }
      }
    }
  };
