const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
    name: "ip",
    description: "Sunucu ve ts3 ip'sini iletir.",
    options: [],
    
    async execute(client, interaction, config, db) {
      await interaction.deferReply();
      
      const { user, options, guild } = interaction;
      const servername = config.server.servername
      const serverip = config.server.ip
      const ts3ip = config.server.ts3ip
      const cfxtiklabaglanip = config.server.cfxtiklabaglanip

  const embed = new EmbedBuilder()
      .setDescription(`**• Server:
      \`connect ${serverip}\` | [Tıkla Bağlan](${cfxtiklabaglanip})
      
      • TS3 IP:
      \`${ts3ip}\`**`)
      .setTimestamp()
      .setColor('#0000ff')
      .setFooter({ text: `${servername} • ${user.tag} tarafından istendi.`, iconURL: `${user.displayAvatarURL()} ` })
     
     return interaction.followUp({ embeds: [embed]})


  }
}