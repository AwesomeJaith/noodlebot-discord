require('dotenv').config();

const { Client, IntentsBitField } = require('discord.js');

const noodlebot = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ],
});

const discordToken = process.env.DISCORD_TOKEN;

console.log(discordToken);

noodlebot.login();