require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'test',
        description: 'Sends a hello message to show the bot is working.',
    },
];

const rest = new REST({ version: '10'}).setToken(process.env.DISCORD_TOKEN);

(async () => {
    try {
        console.log('Status | ✅ | Registering slash commands...');
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        )

        console.log('Status | ✅ | Slash commands were registered successfully!');
    } catch (error) {
        console.log(`There was an error: ${error}`);
    }
})();