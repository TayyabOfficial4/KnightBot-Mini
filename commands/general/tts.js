/**
 * Text to Speech Command (Buffer Method)
 */

const gTTS = require('gtts');

module.exports = {
  name: 'tts',
  aliases: ['texttospeech', 'say'],
  category: 'general',
  description: 'Convert text to speech',
  usage: '.tts <text>',

  async execute(sock, msg, args, extra) {
    if (!args || args.length === 0) {
      return await extra.reply('❌ Usage: .tts <text>');
    }

    const text = args.join(' ');

    const gtts = new gTTS(text, 'en');

    gtts.stream().on('data', async (data) => {
      await sock.sendMessage(extra.from, {
        audio: data,
        mimetype: 'audio/mpeg',
        ptt: true
      }, { quoted: msg });
    }).on('error', async (err) => {
      await extra.reply('❌ Error generating TTS audio.');
    });
  }
};
