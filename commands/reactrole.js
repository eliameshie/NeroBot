const Discord = require('discord.js');

// Variables for Embed
const embedTitle = 'Nero Studios Reaction Role';
const embedDesc = 'React to an emoji to receieve a role in the Discord and access to more channels!';
const embedColor = 'A6D8FF';
const embedFooter = 'Developed by Nero Studios LLC | *More Games Coming Soon*';
const errorColor = '';

// ID for Emojis - Gaming

const mcEmoji = '728410837567537182';
const csEmoji = '728410400906936392';
const valEmoji = '728410928919609404';

// Game Roles Embed

const gRoles = 
`
<:Minecraft:728410837567537182> - Minecraft
<:CSGO:728410400906936392> - CSGO
<:Valorant:728410928919609404> - Valorant

`;


module.exports = {
    name: 'reactrole',
    description: "reactrole",
    execute(message, args) {

    const gameRoleEmbed = new Discord.RichEmbed()
    	.setTitle(embedTitle)
    	.setDescription(embedDesc)
    	.addField('Nero Studios Gaming Roles', `${gRoles}`)
    	.setColor(embedColor)
    	.setFooter(embedFooter)

    message.channel.send(gameRoleEmbed)
    	.then(message => {
    		message.react(mcEmoji);
    		message.react(csEmoji);
    		message.react(valEmoji);
    	}).catch(err => console.log(err))
    

    }
}