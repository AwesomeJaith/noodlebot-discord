
const { Client, Events, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const { discordToken } = require('../config.json');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.once(Events.ClientReady, readyClient => {
    console.log(`Status: ✅ | ${readyClient.user.tag} is online.`);
});

client.login(discordToken);