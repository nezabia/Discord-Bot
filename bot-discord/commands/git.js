const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor(0xff1b17)
	.setTitle('Lista de Animações')
	.setURL('https://docs.google.com/document/d/1RbdU3Fvj_5TefagfvFTjy2cwEZ1gkXRVVbE5YjiRFdQ/edit?usp=sharing')
	.setAuthor({ name: 'Animações', iconURL: 'https://i.imgur.com/U4MwLNx.jpeg', url: 'https://docs.google.com/document/d/1RbdU3Fvj_5TefagfvFTjy2cwEZ1gkXRVVbE5YjiRFdQ/edit?usp=sharing' })
	.setThumbnail('https://i.imgur.com/jRr7xHj.jpeg')
	.addFields(
		{ name: 'Jujutsu Kaisen', value: 'Ep: 22 Temp: 2', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.setImage('https://i.imgur.com/PIcDAWq.jpeg')
	.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

module.exports = {
    data: new SlashCommandBuilder()
        .setName("git")
        .setDescription("Relembrar comandos do git."),
        
    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
} 