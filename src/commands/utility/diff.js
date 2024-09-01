const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const diffImage = new EmbedBuilder()
  .setColor("ffd166")
  .setTitle("Difference")
  .setImage(
    "https://media.discordapp.net/attachments/1278848189767614566/1279653363902054421/diff_html_v2.png?ex=66d53990&is=66d3e810&hm=792eb72e8ecb7fc7acb4fb2f0d1f042042fd15b9858280a45da25d5531ad79ed&=&format=webp&quality=lossless&width=1438&height=249"
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
