/**
 * Text to Speech Command - 
 */

const { getAudioUrl } = require('google-tts-api');
const { franc } = require('franc');

module.exports = {
  name: 'tts',
  aliases: ['texttospeech', 'say'],
  category: 'tools',
  description: 'Convert text to speech with auto language detection',
  usage: '.tts <text>',
  
  async execute(sock, msg, args, extra) {
    try {
      if (args.length === 0) {
        return extra.reply('❌ Usage: .tts <text>\n\nExample: .tts Hello World');
      }
      
      const text = args.join(' ');
      
      // Auto-detect language
      const langCode = franc(text);
      
      // Map common detect codes to Google TTS codes
      const langMap = {
        'urd': 'ur',
        'hin': 'hi',
        'eng': 'en',
        'ara': 'ar'
      };
      
      const targetLang = langMap[langCode] || 'en';
      
      const url = getAudioUrl(text, {
        lang: targetLang,
        slow: false,
        host: 'https://translate.google.com',
      });
      
      await sock.sendMessage(extra.from, { 
        audio: { url: url }, 
        mimetype: 'audio/mpeg', 
        ptt: true 
      }, { quoted: msg });
      
    } catch (error) {
      await extra.reply(`❌ TTS Error: ${error.message}`);
    }
  }
};