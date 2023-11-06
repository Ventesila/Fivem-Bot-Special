const { PermissionsBitField, EmbedBuilder } = require("discord.js");

module.exports = {
    name:"karakteronay-al",
    description: 'Kullanıcıdan karakteronay rolünü alırsın!',
    type:1,
    options: [
        {
            name:"user",
            description:"karakteronay alınacak kullanıcıyı seçin!",
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
        if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)&& !interaction.member.roles.cache.has(yetkili)) return interaction.followUp({content: "Bu komutu kullanabilecek yetkiye sahip değilsin!", ephemeral: true})

    const kullanıcı = interaction.options.getMember('user')

    return kullanıcı.roles.remove(karakteronay),
    kullanıcı.roles.remove(karakteronay),
    kullanıcı.roles.add(unkarakteronay),
    kullanıcı.roles.add(unkarakteronay),
    interaction.followUp({ embeds: [
        new EmbedBuilder().setThumbnail(kullanıcı.displayAvatarURL()).setColor(0x2F3136).setAuthor({ name: `${interaction.guild.name}`, iconURL: `${interaction.guild.iconURL()} ` }).setDescription(`Başarıyla ${kullanıcı} Kullanıcısından Karakteronay Rolünü Aldım.`).setTimestamp().setFooter({ text: `${interaction.user.tag} tarafından istendi.`, iconURL: `${interaction.user.displayAvatarURL()}` })
     ]})
}}