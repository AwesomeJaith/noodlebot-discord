require('dotenv').config();

const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');

const noodlebot = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

const discordToken = process.env.DISCORD_TOKEN;

noodlebot.on('ready', (client) => {
    console.log(`Status: ✅ | ${client.user.tag} is online.`);
});

noodlebot.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'test') {
        interaction.reply('Hello!');
    }

    if (interaction.commandName === 'info') {
        const embed = new EmbedBuilder()
            .setTitle('info')
            .setDescription('noodlebot is a useful Discord bot with random features.')
            .setColor('Random')
            .addFields({
                name: 'Field title',
                value: 'Some value',
                inline: true,
            });

        interaction.reply({ embeds: [embed] });
    }

    if (interaction.commandName === 'add') {
        const num1 = interaction.options.get('first-number').value;
        const num2 = interaction.options.get('second-number').value;
        const sum = num1 + num2;
        interaction.reply(`The sum of ${num1} and ${num2} is ${sum}`);
    }
});

noodlebot.login(discordToken);
