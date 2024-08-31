const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const diffEmbed = new EmbedBuilder()
  .setColor("ffd166")
  .setTitle("Diff")
  .addFields(
    { name: "First Message", value: "Some Value", inline: true },
    { name: "Second Message", value: "Some Value", inline: true }
  )
  .setTimestamp();

module.exports = {
  data: new SlashCommandBuilder()
    .setName("diff")
    .setDescription("Shows the difference between two messages.")
    .addStringOption((option) =>
      option
        .setName("message1")
        .setDescription("The first message you want to compare.")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("message2")
        .setDescription("The second message you want to compare.")
        .setRequired(true)
    ),
  async execute(interaction) {
    const message1 = interaction.options.getString("message1");
    const message2 = interaction.options.getString("message2");

    await interaction.reply({ embeds: [diffEmbed] });
  },
};
