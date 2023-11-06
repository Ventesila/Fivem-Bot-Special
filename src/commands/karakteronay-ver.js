const { PermissionsBitField, EmbedBuilder } = require("discord.js");

module.exports = {
    name:"karakteronay-ver",
    description: 'Kullanıcıya Karakteronay rolü verirsin!',
    type:1,
    options: [
        {
            name:"user",
            description:"Karakteronay verilecek kullanıcıyı seçin!",
            type:6,
            required:true
        },
    ],

    async execute(client, interaction, config, db) {
        await interaction.deferReply();
        
        const { user, options, guild } = interaction;
        const yetkili = config.yetkili
        const karakteronay = config.karakteronay
        const unkarakteronay = config.unkarakteronay
        const wllog = config.logs.wllog
        if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)&& !interaction.member.roles.cache.has(yetkili)) return interaction.followUp({content: "Bu komutu kullanabilecek yetkiye sahip değilsin!", ephemeral: true})

    const kullanıcı = interaction.options.getMember('user')

    return kullanıcı.roles.remove(unkarakteronay),
    kullanıcı.roles.remove(unkarakteronay),
    kullanıcı.roles.add(karakteronay),
    kullanıcı.roles.add(karakteronay),
    interaction.followUp({ embeds: [
        new EmbedBuilder().setThumbnail(kullanıcı.displayAvatarURL()).setColor(0x2F3136).setAuthor({ name: `${interaction.guild.name}`, iconURL: `${interaction.guild.iconURL()} ` }).setDescription(`Başarıyla ${kullanıcı} Kullanıcısına Karakteronay Rolü Verdim.`).setTimestamp().setFooter({ text: `${interaction.user.tag} tarafından istendi.`, iconURL: `${interaction.user.displayAvatarURL()}` })
     ]})
}}