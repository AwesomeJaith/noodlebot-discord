const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const diffImage = new EmbedBuilder()
  .setColor("ffd166")
  .setTitle(" ")
  .setImage(
    "https://media.discordapp.net/attachments/1278848189767614566/1282444165342298173/image.png?ex=66df60b3&is=66de0f33&hm=f67844b7506c923682c14781cb6590a1841c3b34c10589a7832a30efb861692a&=&format=webp&quality=lossless&width=1280&height=293"
  )
  .addFields(
    { name: "Before", value: "before text", inline: true },
    { name: "After", value: "after text", inline: true }
  )
  .setTimestamp();

module.exports = {
  data: new SlashCommandBuilder()
    .setName("diff")
    .setDescription("Shows the difference between two messages."),
  // .addStringOption((option) =>
  //   option
  //     .setName('message1')
  //     .setDescription('The first message you want to compare.')
  //     .setRequired(true)
  // )
  // .addStringOption((option) =>
  //   option
  //     .setName('message2')
  //     .setDescription('The second message you want to compare.')
  //     .setRequired(true)
  // ),
  async execute(interaction) {
    const message1 = interaction.options.getString("message1");
    const message2 = interaction.options.getString("message2");

    await interaction.reply({ embeds: [diffImage] });
  },
};
