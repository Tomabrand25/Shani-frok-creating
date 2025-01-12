const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports = {
    config: {
        name: "boss",
        version: "1.0.1",
        hasPermssion: 0,
        credits: "SHANKAR SUMAN",
        description: "no prefix",
        usePrefix: false,
        commandCategory: "No command marks needed",
        usages: "Yo Yo",
        cooldowns: 5,
    },

    // Array of Imgur URLs
    handleEvent: async function({ api, event, client, Users, __GLOBAL }) {
        const gifs = [
            "https://i.imgur.com/YjRNLzO.jpeg",
            "https://i.imgur.com/YjRNLzO.jpeg",
            "https://i.imgur.com/YjRNLzO.jpeg",
            "https://i.imgur.com/YjRNLzO.jpeg",
            "https://i.imgur.com/YjRNLzO.jpeg",
            "https://i.imgur.com/YjRNLzO.jpeg"
        ];

        const message = "𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 𝐁𝐨𝐭 𝐢𝐃 🤖\n\n● ────────────────── ●\n\n𝐌𝐘 𝐎𝐰𝐧𝐞𝐑 𝐀𝐥𝐢𝐬𝐡𝐚 𝙭 𝙍𝙤𝙝𝙖𝙗 .... < 𝐄𝐃𝐈𝐓 > .... 🦋🌿𝐀𝐧𝐤𝐇𝐨 𝐌𝐞 𝐏𝐲𝐚𝐑 𝐃𝐢𝐋 𝐌𝐞 𝐊𝐡𝐮𝐌𝐚𝐫 🌬️🌍 ••𝐊𝐚𝐇𝐢 𝐏𝐲𝐚𝐑 𝐓𝐨 𝐍𝐚𝐇𝐢 𝐇𝐨 𝐆𝐚𝐘𝐚  >³••🕊️🍎\n\n● ────────────────── ●\n\n𝐎𝐰𝐧𝐞𝐫 ➻  𝐀𝙡𝙞𝙨𝙝𝙖 𝙧𝙖𝙣𝙞";
        const { threadID, messageID } = event;
        const lowerCaseMessage = event.body.toLowerCase();

        if (lowerCaseMessage.startsWith("aadi")) {  
            // Select a random image URL from the array
            const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
            const downloadPath = path.join(__dirname, 'Boss-Jpg-Images.jpg');

            // Download image from the random URL
            request(randomGif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
                const msg = {
                    body: message,
                    attachment: fs.createReadStream(downloadPath)
                };
                api.sendMessage(msg, threadID, messageID);
                api.setMessageReaction("😘", event.messageID, (err) => {}, true);
            });
        }
    },

    run: function({ api, event, client, __GLOBAL }) {
        // Empty run function for module requirements
    },
}
