const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor(0xff9ee2)
	.setTitle('Lista de Animações')
	.setURL('https://docs.google.com/document/d/1RbdU3Fvj_5TefagfvFTjy2cwEZ1gkXRVVbE5YjiRFdQ/edit?usp=sharing')
	.setAuthor({ name: 'Animações', iconURL: 'https://imgur.com/U4pDiNj', url: 'https://docs.google.com/document/d/1RbdU3Fvj_5TefagfvFTjy2cwEZ1gkXRVVbE5YjiRFdQ/edit?usp=sharing' })
	.setDescription('Uma lista com as animações que vamos assistir.')
	.setThumbnail('https://imgur.com/U4pDiNj')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

module.exports = {
    data: new SlashCommandBuilder()
        .setName("git")
        .setDescription("Relembrar comandos do git."),
        
    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
} 