const Discord = require('discord.js');

// Variables for Embed
const embedTitle = 'Reaction Roles';
const embedDesc = 'React to an emoji to receive a role in the Discord and access to more channels!';
const embedColor = 'A6D8FF';
const embedFooter = 'Developed by Nero Studios LLC | eli#3981';
const errorColor = '';

// ID for Emojis - Gaming

const mcEmoji = '728410837567537182';
const csEmoji = '728410400906936392';
const valEmoji = '728410928919609404';

// Game Roles Embed

const gRoles = 
`
<:Minecraft:728410837567537182> | Minecraft
<:CSGO:728410400906936392> | CSGO
<:Valorant:728410928919609404> | Valorant

`;

const accessRoles = 
`
<:Minecraft:728410837567537182> | Minecraft
<:CSGO:728410400906936392> | CSGO
<:Valorant:728410928919609404> | Valorant

`;


module.exports = {
    name: 'reactrole',
    description: "reactrole",
    execute(message, args) {


if(!args[1]) return message.reply("Missing arguments.")

if(args[1] === 'games') {


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
 
if(args[1] === 'access') {


    const accessRoleEmbed = new Discord.RichEmbed()
    	.setTitle(embedTitle)
    	.setDescription(embedDesc)
    	.addField('Nero Studios Roles', `${accessRoles}`)
    	.setColor(embedColor)
    	.setFooter(embedFooter)

    message.channel.send(accessRoleEmbed)
    	.then(message => {
    		message.react(mcEmoji);
    		message.react(csEmoji);
    		message.react(valEmoji);
    	}).catch(err => console.log(err))    
}

    	message.delete()
    }
}