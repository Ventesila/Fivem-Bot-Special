const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
    name: "sunucu-aktif",
    description: "Sunucu aktif verir.",
    options: [],
    
    async execute(client, interaction, config, db) {
      await interaction.deferReply();
      
      const { user, options, guild } = interaction;
      const serverip = config.server.ip
      const ts3ip = config.server.ts3ip
      const cfxtiklabaglanip = config.server.cfxtiklabaglanip
      const servername = config.server.servername
  

  if (!interaction.member.permissions.has("Administrator")) return interaction.followUp("Bu komutu kullanabilecek yetkiye sahip değilsin!");
  const embed = new EmbedBuilder()
      .setTitle("Sunucu Aktif!")
      .setDescription(`> **Sunucumuz şu anda AKTIF duruma geçmiştir.**

        **• Server:
        \`connect ${serverip}\` | [Tıkla Bağlan](${cfxtiklabaglanip})
        
        • TS3 IP:
        \`${ts3ip}\`**
        
        > **___Hepinize iyi roller dileriz!___**`)
      .setTimestamp()
      .setColor('#7FFF00')
      .setImage("https://media.discordapp.net/attachments/608711476219478045/1107795038911602839/b6ef71ab86524c22e85e54efca333c3b.gif")
      .setFooter({ text: `${servername} • ${user.tag} tarafından istendi.`, iconURL: `${user.displayAvatarURL()}` })
     
     return interaction.channel.send("@everyone"), await interaction.followUp({embeds: [embed]})


  }
}