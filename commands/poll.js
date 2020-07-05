// Initializing Discord and other Dependencies.
const Discord = require('discord.js');

// Variables for Embed
const embedTitle = '📋 Poll by ';
const embedDesc = '';
const embedColor = 'A6D8FF';
const embedFooter = '';
const errorColor = '';

const yesEmoji = '728411405199343746'
const nopeEmoji = '728411405253869619'


module.exports = {
    name: 'poll',
    description: "poll",
    execute(message, args) {

    if(message.member.roles.some(role => ["// Higher Staff"].includes(role.name))) {

	const logChannel = message.guild.channels.find(channel => channel.name === 'poll-logs'); 
	const pollQuest = args.slice(1).join(" ");
	const pollEmbed = new Discord.RichEmbed()
		.setTitle(embedTitle + `${message.author.username}`)
		.setDescription(`**${pollQuest}**`)
		.setColor(embedColor)
		.setFooter(`Developed by Nero Studios LLC | eli#3981`)
	
	const pollTimeEmbed = new Discord.RichEmbed()
		.setTitle(embedTitle + `${message.author.username}`)
		.setDescription(`**${pollQuest}**`)
		.setColor(embedColor)
		.setFooter(`Developed by Nero Studios LLC | ${message.createdAt}`)
	



	if(!args[1]) {
		return message.reply('Missing Arguments: !poll <poll>')
	} else {

	logChannel.send(pollTimeEmbed);
	message.channel.send(pollEmbed)
		.then(async message => {
			message.react(yesEmoji);
			message.react(nopeEmoji);
		}).catch(err => console.log(err));
	}

	} else {
		return message.reply("You don't have access to this command.")
	}

		message.delete()
    }
}