/**
 * Gemini AI Command - Google Gemini AI with Urdu/English Support
 * API: https://api.princetechn.com/api/ai/geminiai
 */

const axios = require('axios');

module.exports = {
  name: 'gemini',
  aliases: ['gpt', 'chatgpt', 'ask', 'ai'],
  category: 'ai',
  description: 'Chat with Gemini AI (Urdu/English Support)',
  usage: '.gemini <question>\n\nExample: .gemini آپ کا نام کیا ہے?\n.gemini What is the capital of France?',
  
  async execute(sock, msg, args, extra) {
    try {
      if (args.length === 0) {
        return extra.reply('❌ استعمال: .gemini <سوال>\n\n✅ مثال:\n.gemini کمپیوٹر کیا ہے؟\n.gemini What is AI?');
      }
      
      const question = args.join(' ');
      
      // Show loading message
      await extra.reply('⏳ سوال سے جواب نکال رہے ہیں...');
      
      // Call Gemini API
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
      
      // Extract response
      let answer = 'جواب نہیں ملا';
      
      if (response.data) {
        // Try different response formats
        answer = response.data.result || 
                response.data.response || 
                response.data.message ||
                response.data.answer ||
                response.data.msg ||
                JSON.stringify(response.data);
      }
      
      // Remove loading message and send answer
      await extra.reply(answer);
      
    } catch (error) {
      console.error('Gemini API Error:', error.message);
      
      let errorMsg = '❌ خرابی ہوئی';
      
      if (error.response?.status === 429) {
        errorMsg = '⏳ بہت سے requests آ رہے ہیں۔ کچھ دیر بعد کوشش کریں';
      } else if (error.response?.status === 500) {
        errorMsg = '❌ API سرور بند ہے۔ بعد میں کوشش کریں';
      } else if (error.code === 'ECONNABORTED') {
        errorMsg = '⏱️ جواب میں بہت وقت لگ رہا ہے۔ دوبارہ کوشش کریں';
      } else {
        errorMsg = `❌ خرابی: ${error.message}`;
      }
      
      await extra.reply(errorMsg);
    }
  }
};
