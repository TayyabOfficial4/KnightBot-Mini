/**
 * Gemini AI Command
 */

const axios = require('axios');

module.exports = {
  name: 'gemini',
  aliases: ['gpt', 'chatgpt', 'ask', 'ai'],
  category: 'ai',
  description: 'Chat with Gemini AI',
  usage: '.gemini <question>',
  
  async execute(sock, msg, args, extra) {
    try {
      if (args.length === 0) {
        return extra.reply('❌ Usage: .gemini <question>');
      }
      
      const question = args.join(' ');
      
      const response = await axios.get(
        `https://api.princetechn.com/api/ai/geminiai`,
        {
          params: {
            apikey: 'prince',
            q: question
          },
          timeout: 30000
        }
      );
      
      const answer = response.data.result || response.data.response || response.data.message || 'No response';
      await extra.reply(answer);
      
    } catch (error) {
      await extra.reply(`❌ Error: ${error.message}`);
    }
  }
};
